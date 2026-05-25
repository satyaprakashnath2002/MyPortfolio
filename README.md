# Portfolio

A modern, animated portfolio site built with **TypeScript**, **React**, and **Framer Motion**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customize your content

Edit **`src/data/profile.ts`** — that single file controls your name, bio, skills, projects, social links, and hero stats.

Or reply in chat with your details and ask to have them applied for you.

## Contact form (real email delivery)

Messages are delivered with [Web3Forms](https://web3forms.com) (free, works from localhost and production).

**One-time setup (~1 minute):**

1. Open [web3forms.com/create](https://web3forms.com/create)
2. Enter **nathsatya2002@gmail.com** and create an access key
3. Copy the key from your email
4. Paste it in `src/data/profile.ts` → `web3formsAccessKey: "your-key-here"`
5. Restart `npm run dev` and test the form

Alternatively, put the key in `.env` as `VITE_WEB3FORMS_ACCESS_KEY` (see `.env.example`).

## Build for production

```bash
npm run build
npm run preview
```

## Stack

- [Vite](https://vitejs.dev/) + React 19
- TypeScript
- [Framer Motion](https://www.framer.com/motion/) for scroll and UI animations
- [React Icons](https://react-icons.github.io/react-icons/)
