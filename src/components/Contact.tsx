import { motion, AnimatePresence } from "framer-motion";
import { useState, type FormEvent } from "react";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiCheckCircle,
  HiOutlineExclamationCircle,
} from "react-icons/hi";
import type { SocialLink } from "../types";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import {
  sendContactEmail,
  ContactSendError,
  isContactFormConfigured,
  getContactSetupMessage,
} from "../lib/sendContactEmail";

const WEB3FORMS_SETUP_URL = "https://web3forms.com/create";

interface ContactProps {
  email: string;
  phone: string;
  location: string;
  socials: SocialLink[];
  recipientName: string;
}

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
} as const;

export function Contact({
  email,
  phone,
  location,
  socials,
  recipientName,
}: ContactProps) {
  const [submitted, setSubmitted] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formReady = isContactFormConfigured();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!formReady) {
      setError(getContactSetupMessage());
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const senderEmail = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name || !senderEmail || !message) return;

    setSending(true);

    try {
      await sendContactEmail({ name, email: senderEmail, message });
      setSenderName(name);
      setSubmitted(true);
      form.reset();
    } catch (err) {
      const msg =
        err instanceof ContactSendError
          ? err.message
          : "Something went wrong. Please email me directly.";
      setError(msg);
    } finally {
      setSending(false);
    }
  };

  const handleSendAnother = () => {
    setSubmitted(false);
    setSenderName("");
    setError(null);
  };

  return (
    <section id="contact" className="section contact">
      <SectionHeading
        index="05"
        title="Get in touch"
        subtitle="Open to internships, collaborations, and full-time opportunities."
      />

      <div className="contact-grid">
        <Reveal className="contact-info glass">
          <p>
            Reach out for internships, project work, or full-time roles—I typically
            reply within a day or two.
          </p>
          <ul className="contact-details">
            <li>
              <HiOutlineMail />
              <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li>
              <HiOutlinePhone />
              <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
            </li>
            <li>
              <HiOutlineLocationMarker />
              <span>{location}</span>
            </li>
          </ul>
          <div className="social-row">
            {socials.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap] ?? FaGithub;
              return (
                <motion.a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="contact-form glass">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="contact-success"
                  role="status"
                  aria-live="polite"
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="success-icon-wrap"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                      delay: 0.1,
                    }}
                  >
                    <HiCheckCircle aria-hidden />
                  </motion.div>
                  <h3 className="success-title">Message sent!</h3>
                  <p className="success-text">
                    Thank you{senderName ? `, ${senderName}` : ""}! Your message was
                    delivered to <strong>{recipientName}</strong>&apos;s inbox (
                    {email}). I&apos;ll reply within 1–2 business days.
                  </p>
                  <button
                    type="button"
                    className="btn btn-ghost btn-full"
                    onClick={handleSendAnother}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="contact-form-inner"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {!formReady && (
                    <div className="form-setup" role="note">
                      <p>
                        <strong>Form not connected to your inbox yet.</strong> Get a
                        free access key (takes 1 minute), then add it to{" "}
                        <code>src/data/profile.ts</code>:
                      </p>
                      <ol>
                        <li>
                          Open{" "}
                          <a
                            href={WEB3FORMS_SETUP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            web3forms.com/create
                          </a>
                        </li>
                        <li>Enter <strong>nathsatya2002@gmail.com</strong></li>
                        <li>Copy the access key from your email</li>
                        <li>
                          Paste it as <code>web3formsAccessKey: &quot;your-key&quot;</code>
                        </li>
                      </ol>
                    </div>
                  )}

                  {error && (
                    <div className="form-error" role="alert">
                      <HiOutlineExclamationCircle aria-hidden />
                      <p>{error}</p>
                    </div>
                  )}

                  <label>
                    Name
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      autoComplete="name"
                      disabled={sending}
                    />
                  </label>
                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      autoComplete="email"
                      disabled={sending}
                    />
                  </label>
                  <label>
                    Message
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      disabled={sending}
                    />
                  </label>
                  <motion.button
                    type="submit"
                    className="btn btn-primary btn-full"
                    disabled={sending || !formReady}
                    whileHover={sending || !formReady ? undefined : { scale: 1.02 }}
                    whileTap={sending || !formReady ? undefined : { scale: 0.98 }}
                  >
                    {sending ? "Sending…" : "Send message"}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
