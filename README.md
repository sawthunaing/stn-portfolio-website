# Portfolio: Next.js + Tailwind CSS + free AI assistant

## 2-hour launch checklist

| Time | Task |
|---|---|
| 0:00–0:15 | Install Node.js 20+, unzip, run `npm install`, then `npm run dev` and open http://localhost:3000 |
| 0:15–1:00 | Edit `data/profile.ts` with your real details. Put your CV in `public/cv.pdf` |
| 1:00–1:15 | Get a free Gemini key (https://aistudio.google.com/apikey), copy `.env.example` to `.env.local`, paste the key, test the dialog |
| 1:15–1:35 | Push to GitHub and deploy on Vercel (steps below) |
| 1:35–2:00 | Connect your domain, test on your phone, add the link to LinkedIn and your CV |

## Run locally

```bash
npm install
cp .env.example .env.local   # then paste your GEMINI_API_KEY
npm run dev
```

## Deploy to Vercel

```bash
git init
git add .
git commit -m "Portfolio v1"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

1. Go to https://vercel.com, sign in with GitHub, click **Add New → Project**, and import `portfolio`.
2. Under **Environment Variables**, add `GEMINI_API_KEY` (and optionally `GROQ_API_KEY` as a backup).
3. Click **Deploy**. Every future `git push` redeploys automatically.

## Custom domain

Vercel → Project → Settings → Domains → add `yourname.co.uk`, then create the DNS records Vercel shows you at your registrar. HTTPS is automatic.

## How the AI works

- `data/profile.ts` is the only source of truth for the page, the search, and the AI.
- `app/api/ask/route.ts` sends the question plus your profile to Gemini (free tier), falls back to Groq if configured, and is limited to 10 questions per visitor per hour.
- If Google renames its free model, set `GEMINI_MODEL` in Vercel to the new name shown in AI Studio.
- If no key is set, the dialog still works as an instant search.
