# Reviews landing page (Vercel-ready static site)

Simple static site: `index.html` + `styles.css` + `app.js`.
No build step. Just deploy the folder to Vercel.

## 1. Set your redirect link

Open `app.js` line 4 and replace:

```js
const REDIRECT_URL = "https://YOUR-LINK-HERE.com";
```

with your real link, e.g.:

```js
const REDIRECT_URL = "https://your-offer-link.com/?aff=123";
```

All buttons (nav, hero, bottom, footer) use this automatically.

## 2. How randomisation works

- On every page load, all 50 reviews are Fisher-Yates shuffled.
- A random COUNT (6–9, change `MIN_SHOW` / `MAX_SHOW` in `app.js`) is shown.
- No review repeats within a view — slice of a shuffled unique array.
- "Show more" appends the next unique 6. "Shuffle" re-rolls a fresh set.

To always show e.g. exactly 8: set `MIN_SHOW = 8` and `MAX_SHOW = 8`.

## 3. Deploy to Vercel

Option A — drag & drop:
1. Go to vercel.com → New Project → upload this `reviews-site` folder.

Option B — CLI:
```bash
cd reviews-site
npx vercel --prod
```

That's it — static, no config needed. `vercel.json` is just for clean URLs.
