import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',
  adapter: vercel({ ... }),
  vite: {
    plugins: [tailwindcss()],
  },
});