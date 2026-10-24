// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://outorbit.games',
	trailingSlash: 'always',
	integrations: [sitemap({ lastmod: new Date() })],
	vite: {
		plugins: [tailwindcss()],
	},
});
