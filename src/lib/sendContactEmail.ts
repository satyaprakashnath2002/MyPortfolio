import { profile } from "../data/profile";

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export type ContactErrorCode = "network" | "activation" | "config" | "unknown";

export class ContactSendError extends Error {
  readonly code: ContactErrorCode;

  constructor(message: string, code: ContactErrorCode) {
    super(message);
    this.name = "ContactSendError";
    this.code = code;
  }
}

function getWeb3FormsKey(): string | undefined {
  const fromEnv = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
  const fromProfile = profile.web3formsAccessKey;
  const key = (fromEnv?.trim() || fromProfile?.trim()) || undefined;
  return key;
}

function getFormspreeId(): string | undefined {
  const id = import.meta.env.VITE_FORMSPREE_FORM_ID as string | undefined;
  return id?.trim() || undefined;
}

export function isContactFormConfigured(): boolean {
  return !!(getWeb3FormsKey() || getFormspreeId());
}

export function getContactSetupMessage(): string {
  return (
    "Add a free Web3Forms access key to receive messages. " +
    "Visit web3forms.com/create, enter your email, copy the key, " +
    "and paste it in src/data/profile.ts as web3formsAccessKey (or in .env as VITE_WEB3FORMS_ACCESS_KEY)."
  );
}

async function sendViaWeb3Forms(
  accessKey: string,
  { name, email, message }: ContactPayload,
): Promise<void> {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      name,
      email,
      message,
      subject: `Portfolio contact from ${name}`,
      from_name: "Portfolio — Satyaprakash Nath",
      replyto: email,
      botcheck: "",
    }),
  });

  let data: { success?: boolean; message?: string } = {};
  try {
    data = (await res.json()) as typeof data;
  } catch {
    if (!res.ok) {
      throw new ContactSendError(
        `Email service returned error ${res.status}. Try again or email directly.`,
        "unknown",
      );
    }
  }

  if (!res.ok || !data.success) {
    throw new ContactSendError(
      data.message ?? "Could not send message. Please try again or email directly.",
      "unknown",
    );
  }
}

async function sendViaFormspree(
  formId: string,
  { name, email, message }: ContactPayload,
): Promise<void> {
  const body = new FormData();
  body.append("name", name);
  body.append("email", email);
  body.append("message", message);
  body.append("_subject", `Portfolio message from ${name}`);

  const res = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    body,
    headers: { Accept: "application/json" },
  });

  const data = (await res.json().catch(() => ({}))) as {
    ok?: boolean;
    error?: string;
  };

  if (!res.ok) {
    throw new ContactSendError(
      data.error ?? "Could not send message. Please try again or email directly.",
      "unknown",
    );
  }
}

/** Sends contact form to your inbox via Web3Forms or Formspree. */
export async function sendContactEmail(
  payload: ContactPayload,
): Promise<void> {
  const web3Key = getWeb3FormsKey();
  const formspreeId = getFormspreeId();

  if (!web3Key && !formspreeId) {
    throw new ContactSendError(getContactSetupMessage(), "config");
  }

  try {
    if (web3Key) {
      await sendViaWeb3Forms(web3Key, payload);
      return;
    }
    if (formspreeId) {
      await sendViaFormspree(formspreeId, payload);
    }
  } catch (err) {
    if (err instanceof ContactSendError) throw err;
    throw new ContactSendError(
      "Could not reach the email service. Check your internet, or email nathsatya2002@gmail.com directly.",
      "network",
    );
  }
}
