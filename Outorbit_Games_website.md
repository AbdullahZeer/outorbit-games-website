# 🪐 Outorbit Games — Website Context & Build Guide

## 🌌 Overview

**Studio Name:** Outorbit  
**Extended Form:** Outorbit Games  
**Domain:** [outorbit.games](https://outorbit.games)  
**Hosting:** Netlify  
**Tech Stack:** Astro + Tailwind CSS + custom Starfield background  
**Goal:** Create a minimal, calm, atmospheric landing page that reflects a small indie studio quietly working on its first game.

---

## 🚀 Brand Identity

**Theme:**  
Space, exploration, breaking orbit, leaving gravity — calm, sci-fi, minimal.  

**Tone:**  
Independent, confident, mysterious, creative, quietly ambitious.  

**Moodboard Keywords:**  
`dark`, `monochrome`, `cosmic`, `clean`, `geometric`, `slow drift`, `subtle motion`.

**Logo Concept:**  
- Minimal, geometric, monochrome icon.  
- “OO” monogram — two orbits with a rocket or arrow breaking free.  
- Works as both **symbol** (favicon / social avatar) and **wordmark**.  
- Feels calm yet exploratory.  
- Avoid gradients or flashy colors.  

**Color Palette:**  
- Background: `#000000` (true black)  
- Primary text: `#FFFFFF` (white)  
- Accent (optional subtle): `#B0F0FF` or light blue glow for motion lines / orbit path.  
- Transparency + blur used to separate content from starfield.

---

## ✉️ Communications

**Workspace:** Google Workspace  
**Primary Inbox:** `hello@outorbit.games`  

**Aliases (redirect to main):**  
- `contact@outorbit.games`  
- `press@outorbit.games`  
- `jobs@outorbit.games`  
- `support@outorbit.games`  

---

## 🌐 Website Goals — v1

A **single-page landing site**, clean and cinematic.

**Sections:**
1. **Logo Header**
   - Outorbit logo centered top or slightly above center.
2. **Main Card / Box**
   - Studio description.
   - Status line (“Quietly working on our first game.”)
   - Contact link (mailto to hello@outorbit.games)
   - Social placeholders (Twitter / Itch.io / YouTube / Discord)
3. **Background**
   - Custom `<canvas>` starfield — slow-moving drifting stars.
   - Dark, subtle, depth without distraction.
4. **Footer (optional)**
   - © Outorbit Games • All Rights Reserved

**Target Visuals:**
- Black background.
- White or gray text.
- One translucent blurred card for content readability.
- Motion: starfield only.

---

## 🧱 Tech Stack Setup

**Framework:** [Astro](https://astro.build/)  
**Styling:** [Tailwind CSS](https://tailwindcss.com/)  

**Initial Structure:**


**Starfield Component Notes:**
- Uses `<canvas>` + JS for star drift animation.
- Fixed position, z-index -1.
- Renders beneath main content.
- Adjustable density and speed.

**Deployment:**  
- Auto-deploy from GitHub to Netlify (main branch).  
- Use environment `OUTORBIT_ENV=production`.  

---

## 🧩 Content and Copy Direction

**Taglines (AI can rotate / test variants):**
- “Independent game studio exploring beyond orbit.”
- “Creators of worlds beyond gravity.”
- “Outorbit is a small studio focused on atmospheric, exploratory games.”

**Status Line:**
> “Quietly working on our first game.”

**Meta Description (SEO):**
> Outorbit Games is an independent game studio exploring atmospheric, story-driven worlds beyond orbit.

**Keywords:**  
`indie game studio`, `space exploration games`, `atmospheric indie games`, `outorbit`, `outorbit games`.

---

## 🪐 Visual / Motion Design Notes

- **Background:** Subtle parallax starfield (slow drift, no flashing).  
- **Typography:** Sans-serif, futuristic but clean.  
  Suggested: `Geist Sans`, `Inter`, or `Space Grotesk`.  
- **Layout:** Centered container (max-width ~600–700px).  
- **Effects:** Soft blur on content box (glassmorphism).  
- **Animations:** Gentle fade-ins, slow transitions (ease-in-out 1.5s).  

---

## 🧭 Expansion Plan (Later Versions)

| Page | Purpose |
|------|----------|
| `/about` | Studio philosophy, small team intro |
| `/games` | List of current & upcoming titles |
| `/press` | Brand assets, press kit |
| `/contact` | Form or email CTA |
| `/blog` | (optional) dev logs |

**AI Agent Future Tasks:**
- Auto-generate About and Press pages once content is available.
- Add Open Graph tags and SEO metadata.
- Build reusable layout component for header/footer.
- Add language localization later (en/ar).

---

## 🤖 AI Agent Instructions

You are building and maintaining the Outorbit Games website.

**Primary goals:**
1. Generate Astro + Tailwind code for pages/components based on this spec.  
2. Keep design minimal, atmospheric, and brand-aligned.  
3. Automatically handle deployment to Netlify.  
4. When content expands, follow this same structure and tone.

**Rules:**
- Always keep starfield active in the background.
- Never add bright colors or noise.
- Every new page must include a short description of the studio and a link to contact.
- Prefer calm animations and high readability.
- Always optimize for performance (canvas under 5% CPU).

---

## 🗂 Example Landing Page Content

**Title:** Outorbit Games — Exploring Beyond Orbit  
**Meta Description:** An independent studio quietly crafting atmospheric worlds beyond gravity.  

**Hero Block Example:**


---

## ✅ Deliverables Checklist

- [ ] Create Astro + Tailwind base project.  
- [ ] Implement Starfield background (`Starfield.astro`).  
- [ ] Build landing page (`index.astro`).  
- [ ] Add blurred main card with copy.  
- [ ] Add responsive layout.  
- [ ] Configure Netlify deploy.  
- [ ] Setup `hello@outorbit.games` in footer.  
- [ ] Prepare for `/about`, `/games`, `/press`.  

---

_Last updated: Nov 2025_

