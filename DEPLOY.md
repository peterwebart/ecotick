# Deploying to GitHub and Coolify

Get a live temporary URL. Roughly 15 minutes end to end.

You run every command here. I do not touch the server, and there is no
Dockerfile or reverse-proxy config in this repo — Coolify handles all of that.

---

## Before you start

Verify the build passes locally. If it fails here it will fail on the server,
and debugging is far easier on your own machine.

```powershell
cd C:\AI\ecotick\ecotick
pnpm install
pnpm lint
pnpm build
pnpm audit:site
```

All four must exit 0. `pnpm build` needs internet access the first time, because
`next/font` downloads Fraunces and Inter and self-hosts them.

---

## Part 1 — Push to GitHub

### 1. Confirm nothing secret is staged

```powershell
git status
```

`node_modules`, `.next` and `.env` must **not** appear. They are gitignored. If
you see `.env` listed, stop and tell me before continuing.

### 2. Initialise and commit

Skip `git init` if the folder is already a repo.

```powershell
git init
git add .
git commit -m "Eco-Tick Solutions site: phases 1-4 plus image system"
git branch -M main
```

### 3. Create the GitHub repository

On github.com: **New repository** → name it `ecotick` → set **Private** →
do **not** add a README, .gitignore or licence (you already have them) →
**Create repository**.

### 4. Push

Replace `YOUR-USERNAME`:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/ecotick.git
git push -u origin main
```

If it rejects the push because the remote already exists, use
`git remote set-url origin ...` instead of `git remote add`.

---

## Part 2 — Deploy on Coolify

### 5. Connect GitHub

In Coolify: **Sources** → **+ Add** → **GitHub App** → follow the install flow
and grant access to the `ecotick` repository.

A Personal Access Token also works, but the GitHub App is what gives you
automatic redeploys on push.

### 6. Create the application

**Projects** → pick or create a project → **+ New Resource** →
**Public / Private Repository** → choose `ecotick` → branch `main`.

### 7. Build settings

| Field | Value |
|---|---|
| Build Pack | **Nixpacks** |
| Install Command | **leave empty** |
| Build Command | `pnpm build` |
| Start Command | `pnpm start` |
| Port | `3000` |
| Base Directory | `/` |

**Leave Install Command empty.** This repo ships a `nixpacks.toml` that owns the
install phase, and filling that field in Coolify overrides the whole phase —
which would reintroduce the corepack failure described below.

### Why `nixpacks.toml` exists

Nixpacks' Node provider hardcodes `npm install -g corepack@0.24.1` whenever
`package.json` has a `packageManager` field. Corepack 0.24.1 (January 2024)
cannot execute pnpm 11: it loads the package manager through a vm context built
without an `importModuleDynamically` callback, and pnpm 11's entry point uses a
top-level dynamic import. The build dies before installing anything:

```
TypeError [ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING]
  at /root/.cache/node/corepack/pnpm/11.20.0/bin/pnpm.cjs:3:1
```

`nixpacks.toml` replaces that phase with a pinned corepack 0.34.6, then
`corepack install` reads the exact pnpm version from `packageManager`, so the
version is declared in one place only.

### 8. Environment variables — read this bit carefully

**Settings** → **Environment Variables**. Add:

| Key | Value | Build variable? |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | your temporary Coolify URL, e.g. `https://ecotick-abc123.your-server.sslip.io` | **Yes** |
| `NEXT_PUBLIC_GA4_ID` | leave empty for now | **Yes** |
| `GOOGLE_PLACES_API_KEY` | Google Cloud key with **Places API (New)** enabled | No — runtime only |

`GOOGLE_PLACES_API_KEY` powers address autocomplete on the quote form. It is
read only on the server, in `app/api/places/autocomplete/route.ts`, and is
deliberately **not** prefixed `NEXT_PUBLIC_` so it never reaches the browser.
Restrict it by IP to the Coolify host, not by HTTP referrer. Leave it blank and
the address field degrades to a plain text input — the form still submits.

Anything prefixed `NEXT_PUBLIC_` is **inlined at build time**, not read at
runtime. In Coolify you must tick **"Build Variable"** (sometimes shown as
*Available at build time*) on both, or `NEXT_PUBLIC_SITE_URL` will be empty in
the bundle and every canonical URL and sitemap entry will point at the fallback
domain instead of your preview.

Do not set `PORT` — Coolify injects it.

### 9. Get the temporary domain

**Settings** → **Domains**. Coolify generates a free `sslip.io` domain. Copy it,
paste it into `NEXT_PUBLIC_SITE_URL` above, and save.

### 10. Deploy

Hit **Deploy** and watch the log. A first build takes 2–4 minutes.

Open the URL. You should land on the homepage with the hero photograph.

---

## Part 3 — Verify the deployment

Check these in order. Each one catches a different class of failure.

1. **Homepage renders with images.** If text appears but images are broken,
   `sharp` did not install — see troubleshooting below.
2. **`/sitemap.xml`** lists 19 URLs, all on your Coolify domain, not
   `eco-ticksolutions.ca`. If they show the wrong domain,
   `NEXT_PUBLIC_SITE_URL` was not set as a build variable. Fix and redeploy.
3. **`/robots.txt`** loads and points at your sitemap.
4. **`/get-a-quote`** — step through all six questions. Choose
   *Commercial property* at step 1 and confirm the acreage and headcount fields
   appear at step 3.
5. **Mobile.** Open on a phone. The hero photograph should sit in its own band
   below the copy, unobscured, with the Call / Get a quote bar pinned at the
   bottom.
6. **`/about`** shows Edward's photograph.
7. **View source on any page** and search `application/ld+json` — you should see
   Organization, LocalBusiness and WebSite.

---

## Part 4 — Ongoing deploys

```powershell
git add .
git commit -m "describe the change"
git push
```

Coolify redeploys automatically on push to `main`.

---

## Troubleshooting

**Build fails with `ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING` at `pnpm.cjs`**
Nixpacks installed corepack 0.24.1, which cannot run pnpm 11. `nixpacks.toml`
fixes this — confirm the file reached the server, and confirm Coolify's
**Install Command** field is empty. A value there overrides the phase and the
old corepack comes back.

**Build fails at install with `ERR_PNPM_IGNORED_BUILDS`**
`pnpm-workspace.yaml` should contain an `allowBuilds` block listing `sharp` and
`unrs-resolver`. pnpm 11 exits non-zero until those are explicitly allowed, and
that failure cascades into every later script. It is committed already; if the
error appears, confirm the file reached the server.

**Images 404 or return 500 in production**
`next/image` needs `sharp` at runtime. Confirm the install log shows
`@img/sharp-linux-x64`. This is the same `allowBuilds` issue as above.

**Build fails downloading fonts**
`next/font` fetches Fraunces and Inter from Google at build time. If the server
blocks outbound HTTPS the build fails. Allow it, or convert to `next/font/local`
with the font files committed.

**Canonicals and sitemap point at the wrong domain**
`NEXT_PUBLIC_SITE_URL` was not marked as a build variable. Tick it, redeploy.

**Health check fails but the app looks fine**
Set the health check path to `/` and confirm the port is 3000.

---

## Before pointing the real domain at this

The temporary URL is for review only. Do not send it to Google.

- `/natural-garlic-spray` and `/safety-environment` are `noindex` pending the
  product label. See `CLAIMS-REGISTER.md`.
- `next.config.ts` has an empty `redirects()`. Populate it from the Search
  Console page export for the current site **before** the domain moves, or the
  existing indexed URLs 404.
- Swap `NEXT_PUBLIC_SITE_URL` to `https://www.eco-ticksolutions.ca` and redeploy
  so canonicals are correct from the first crawl.
