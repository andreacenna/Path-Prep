import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// Relative base so the build works on GitHub Pages project sites (/<repo>/) and locally.
export default defineConfig({
  base: './',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/*.png', 'icons/*.svg'],
      manifest: {
        name: 'PATH Academy',
        short_name: 'PATH',
        description: 'Investment banking, M&A, accounting and corporate finance — learned in 5-minute sessions.',
        theme_color: '#0a1428',
        background_color: '#0a1428',
        display: 'standalone',
        orientation: 'portrait',
        start_url: './',
        scope: './',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      },
      workbox: {
        // Precache all app code + lesson content so learning works offline.
        globPatterns: ['**/*.{js,css,html,png,svg,woff2}'],
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
        runtimeCaching: [
          {
            // The daily briefing: try the network first, fall back to the last cached copy.
            urlPattern: ({ url }) => url.pathname.endsWith('/data/news.json'),
            handler: 'NetworkFirst',
            options: { cacheName: 'path-news', networkTimeoutSeconds: 5 }
          }
        ]
      }
    })
  ],
  build: { target: 'es2020', chunkSizeWarningLimit: 1500 },
  test: {
    environment: 'node',
    include: ['tests/unit/**/*.test.ts']
  }
} as any);
