# Handoff: HYPE Pitch Deck → Local Agent

**From:** Cloud agent (no access to Windows `D:\` paths)  
**To:** Local agent with access to Project Hype source files  
**Repo:** `https://github.com/AbdullahZeer/outorbit-games-website`  
**Branch / PR:** `cursor/hype-pitch-deck-db77` — https://github.com/AbdullahZeer/outorbit-games-website/pull/2  
**Base:** `main`  
**Goal:** Make `/pitch` a **1:1** HTML recreation of the PPTX/PDF, keep it **fast**, **password-gated**, and **agent-editable** (edit slides in code → git push → Netlify).

---

## Why this handoff exists

The cloud agent built the `/pitch` infrastructure and a **reconstructed** 12-slide deck from attached slide descriptions + existing `/hype` art. It could **not** read:

- `D:\work\Project Hype\Pitch Deck_polden_draft.pptx`
- `D:\work\Project Hype\Pitch Deck_polden_draft.pdf`
- `D:\work\Project Hype\AnnotationMono_v0.2`
- `D:\work\Project Hype\Resource-Boy-Masking-Tape-Textures\tape_decal_atlas_4x4_split_tinted_e6d4a8_cropped`

Your job is to ingest those local files and bring visual/content parity to the real deck.

---

## Locked product decisions (do not change unless user asks)

| Decision | Value |
|----------|--------|
| URL | `/pitch` |
| Keep `/hype` press kit | Yes, unchanged |
| Auth | One shared password via `PITCH_PASSWORD` env (soft gate; SHA-256 hash only in client) |
| Viewer | Slide-by-slide, 16:9 frame, keyboard ←/→/Space/Home/End, arrows, swipe |
| Format | Native Astro HTML/CSS slides — **not** PDF/PPTX embed |
| Font | AnnotationMono (`public/fonts/AnnotationMono-VF.woff2`) |
| Deploy | Git push → Netlify (`netlify.toml`, `DEPLOYMENT.md`) |
| SEO | `noindex, nofollow` on `/pitch` |

---

## Local source paths (Windows)

Copy these into the repo (recommended) so git/tools can see them, **or** read them in place:

```
D:\work\Project Hype\Pitch Deck_polden_draft.pptx
D:\work\Project Hype\Pitch Deck_polden_draft.pdf
D:\work\Project Hype\AnnotationMono_v0.2\
D:\work\Project Hype\Resource-Boy-Masking-Tape-Textures\tape_decal_atlas_4x4_split_tinted_e6d4a8_cropped\
```

**Recommended drop folder inside the repo (gitignored):**

```
<repo>/_source/
  Pitch Deck_polden_draft.pptx
  Pitch Deck_polden_draft.pdf
  AnnotationMono_v0.2/
  tape_decal_atlas_4x4_split_tinted_e6d4a8_cropped/
```

Add to `.gitignore`:

```
_source/
```

Do **not** commit raw PPTX/PDF to `public/` or ship them to production.

---

## What already exists in the repo

### Routes / shell
- [`src/pages/pitch.astro`](src/pages/pitch.astro) — gate + viewer + password hash
- [`src/components/pitch/PitchGate.astro`](src/components/pitch/PitchGate.astro)
- [`src/components/pitch/SlideViewer.astro`](src/components/pitch/SlideViewer.astro)
- [`src/scripts/pitch-client.ts`](src/scripts/pitch-client.ts) — unlock + navigation + prefetch
- [`src/styles/pitch.css`](src/styles/pitch.css) — paper chrome tokens
- [`src/data/pitchSlides.ts`](src/data/pitchSlides.ts) — ordered registry

### Current slides (reconstructed — replace/realign to PPTX)
| File | Intent |
|------|--------|
| `Slide01Title.astro` | Cover / title |
| `Slide02Hook.astro` | Elevator hook |
| `Slide03Opportunity.astro` | Bubble chart (from attached slide) |
| `Slide04Overview.astro` | Game overview |
| `Slide05Loop.astro` | Day / night |
| `Slide06Features.astro` | Features |
| `Slide07Cast.astro` | Characters (uniforms art) |
| `Slide08Yokai.astro` | Yokai / yurei |
| `Slide09Positioning.astro` | Why this lane |
| `Slide10Studio.astro` | Studio |
| `Slide11Status.astro` | Status + contact |
| `Slide12Thanks.astro` | Thank you |

### Assets already optimized
- `public/hype/pitch/art/*.webp` — from existing `public/hype/{hero,concept-*}`
- `public/hype/pitch/tape/*.svg` — **placeholder** SVG tapes (replace with real atlas crops)

### Password
- Env: `PITCH_PASSWORD` (see `.env.example`)
- Local example used in cloud: `hype-pitch` (in gitignored `.env` — recreate locally)
- Netlify: set `PITCH_PASSWORD` in site env before/after merge

---

## Your mission (local agent checklist)

### 1. Checkout the branch
```bash
git fetch origin
git checkout cursor/hype-pitch-deck-db77
npm install
cp .env.example .env   # set PITCH_PASSWORD
npm run dev
```
Open `http://localhost:4321/pitch/` (or whatever port Astro prints).

### 2. Ingest the deck
```bash
mkdir -p _source
# Copy PPTX, PDF, tape folder, fonts into _source/
```

**Extract PPTX** (zip):
```bash
mkdir -p _source/pptx-extract
unzip -o "_source/Pitch Deck_polden_draft.pptx" -d _source/pptx-extract
# Media: _source/pptx-extract/ppt/media/
# Slides: _source/pptx-extract/ppt/slides/slide*.xml
# Relating order: ppt/presentation.xml + ppt/_rels/presentation.xml.rels
```

**PDF reference frames** (for visual QA):
```bash
# Example with pdftoppm (poppler) or ImageMagick
mkdir -p _source/pdf-pages
pdftoppm -png -r 150 "_source/Pitch Deck_polden_draft.pdf" _source/pdf-pages/slide
```

List true slide count and titles from PPTX/PDF. **Do not assume 12 slides** — match the real deck order and count.

### 3. Replace tape placeholders
- Copy/crop real frames from the tinted atlas (`#e6d4a8`) into `public/hype/pitch/tape/`
- Prefer compressed PNG/WebP with transparency
- Update `Tape.astro` usages / paths in slides that need authentic decals

### 4. Rebuild slides 1:1
For each PPTX/PDF page:
1. Create/update `src/components/pitch/slides/SlideNNName.astro`
2. Export needed media from `ppt/media` → optimize → `public/hype/pitch/art/` (WebP; PNG only if alpha required)
3. Recreate layout in HTML/CSS/SVG (AnnotationMono, paper `#f4f1ea`-ish chrome from `pitch.css`)
4. Use PDF page render as pixel reference
5. Register in `src/data/pitchSlides.ts`
6. Wire imports in `SlideViewer.astro` (static import list — Astro has no dynamic component map)

**Charts:** Prefer SVG/HTML (like `Slide03Opportunity.astro`), not screenshot-only, so copy stays agent-editable. Screenshots OK as temporary fallback for complex art.

### 5. Performance (keep)
- Lazy-load non-first slides; prefetch current ±1 via `prefetch` in registry
- Compress art; don’t ship PPTX/PDF
- `fetchpriority="high"` only on slide 1 hero if needed

### 6. Verify
- [ ] Slide count/order matches PPTX
- [ ] Password gate works with `.env` `PITCH_PASSWORD`
- [ ] Keyboard + arrows + swipe
- [ ] Mobile: slide still readable (letterbox OK)
- [ ] `npm run build` succeeds
- [ ] Raw `_source/` not in git commit

### 7. Ship
```bash
git add -A
git commit -m "Align /pitch slides 1:1 with Project Hype PPTX"
git push -u origin cursor/hype-pitch-deck-db77
```
Update PR #2 (or open a new PR if you branched differently).  
Remind user to set **Netlify `PITCH_PASSWORD`**.

---

## How to edit later (agent workflow)

1. Edit or add `src/components/pitch/slides/SlideNN*.astro`
2. Update `src/data/pitchSlides.ts` + imports in `SlideViewer.astro`
3. Commit + push → Netlify auto-deploy

No PPTX round-trip required for day-to-day copy/layout tweaks once 1:1 is done.

---

## Architecture (quick map)

```
Visitor → /pitch → PitchGate (password) → SlideViewer → Slide01..N
                         ↑
                 PITCH_PASSWORD (build-time hash)
Assets: public/hype/pitch/{art,tape}/
Deploy: push → Netlify build → dist/
```

---

## Do not

- Embed the PPTX/PDF as the public viewer
- Commit secrets or real `PITCH_PASSWORD` into the repo
- Commit `_source/` PPTX/PDF
- Replace `/hype` press kit unless asked
- Switch to hard auth unless user asks

---

## Success criteria

`/pitch` looks and reads like `Pitch Deck_polden_draft` page-for-page, unlocks with one shared password, stays fast on Netlify, and remains editable as Astro slide components.
