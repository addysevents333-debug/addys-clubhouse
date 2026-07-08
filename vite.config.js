import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "icon-192.png",
        "icon-512.png",
      ],
      manifest: false,
      workbox: {
  importScripts: ["push-handler.js"],

  navigateFallback: "/index.html",

  cleanupOutdatedCaches: true,
  clientsClaim: true,
  skipWaiting: true,

  globPatterns: [
    "**/*.{js,css,html,png,jpg,jpeg,svg,webp,ico}",
  ],
},
    }),
  ],
});
