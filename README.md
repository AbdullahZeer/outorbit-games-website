# Outorbit Games Website

A minimal, atmospheric landing page for Outorbit Games built with Astro and Tailwind CSS.

## 🚀 Features

- **Starfield Background**: Custom canvas-based starfield animation with slow drift effect
- **Minimal Design**: Clean, monochrome aesthetic with glassmorphism effects
- **Responsive**: Optimized for mobile, tablet, and desktop
- **Performance**: Optimized starfield animation (<5% CPU usage)
- **SEO**: Complete meta tags and Open Graph support

## 🛠 Tech Stack

- [Astro](https://astro.build/) - Web framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- TypeScript - Type safety

## 📦 Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

This site is deployed on Netlify and connected to the `outorbit.games` domain.

### Domain Configuration

1. Connect the GitHub repository to Netlify
2. Configure the custom domain `outorbit.games` in Netlify dashboard
3. Update DNS records at your domain registrar:
   - Add CNAME record pointing to your Netlify site
   - Or use Netlify's nameservers
4. SSL certificate will be automatically provisioned by Netlify

## 📝 Project Structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Logo.astro
│   │   └── Starfield.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── netlify.toml
└── package.json
```

## 🎨 Brand Guidelines

- **Colors**: Black (#000000) background, White (#FFFFFF) text, optional accent (#B0F0FF)
- **Typography**: Inter (or Geist Sans, Space Grotesk)
- **Tone**: Independent, confident, mysterious, creative, quietly ambitious

## 📧 Contact

hello@outorbit.games

---

© Outorbit Games • All Rights Reserved
