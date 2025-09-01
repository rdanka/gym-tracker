import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react';
import path from "path";
import { defineConfig } from 'vite';
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
     VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "My Gym Tracker",
        short_name: "GymApp",
        description: "Track your workouts and progress",
        theme_color: "#000000",
        icons: [
          {
            src: "logo.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
