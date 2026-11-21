import { defineConfig } from 'vite';

// Build output is committed into the main repo at /js/capacitor-iap-bridge.js
// and loaded via a plain <script> tag — see ../engineers-app/vite.config.js
// for the same committed-build-output pattern. emptyOutDir is false because
// ../js holds every other plain script this static site uses (platform.js,
// icons.js, app-shell.js, ...) and must never be wiped by this build.
export default defineConfig({
  build: {
    outDir: '../js',
    emptyOutDir: false,
    lib: {
      entry: 'src/main.js',
      name: 'LamsaIAPBridge',
      formats: ['iife'],
      fileName: () => 'capacitor-iap-bridge.js'
    }
  }
});
