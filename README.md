<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/6da520e3-763a-4c52-b332-08bab57682b9

## Run Locally

**Prerequisites:** Node.js 20+

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env](.env) to your Gemini API key
   (copy [.env.example](.env.example) to `.env` if needed — powers the AI Tutor, Theory feedback, and Sandbox)
3. Run the app in dev mode:
   `npm run dev`

## Other scripts

| Script | What it does |
|---|---|
| `npm run build` | Builds the client into `dist/` |
| `npm start` | Serves the built app from `dist/` (production) |
| `npm run preview` | Same as `npm start` |
| `npm run lint` | Type-checks with `tsc --noEmit` |
| `npm test` | Renders every view through the SSR smoke harness |
| `npm run clean` | Removes `dist/` and `server.js` |

## Deploy to Vercel

1. Push this repository to GitHub, then import it at [vercel.com/new](https://vercel.com/new)
2. `vercel.json` already sets the build command (`npm run build`) and output directory (`dist`)
3. Add `GEMINI_API_KEY` under Project → Settings → Environment Variables
4. Deploy — `/api/ai-tutor` and `/api/arxiv` ship as serverless functions from [`api/`](api/)

Local development (`npm run dev`) keeps using the Express server in [`server.ts`](server.ts); both share the same logic in [`lib/`](lib/).
