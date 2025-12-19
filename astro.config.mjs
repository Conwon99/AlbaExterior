import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  output: 'static', // Static site generation
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
      configFile: './tailwind.config.js',
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
  publicDir: './static',
});

