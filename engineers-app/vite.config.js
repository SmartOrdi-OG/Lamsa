import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Build output is committed into the main repo at /engineers/ and served
// by Vercel's existing static filesystem routing — no Vercel build step,
// no vercel.json changes. See ../engineers-app/package.json's description.
export default defineConfig({
  plugins: [react()],
  base: '/engineers/',
  build: {
    outDir: '../engineers',
    emptyOutDir: true
  }
});
