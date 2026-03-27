import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true, // Supaya fitur install bisa dites di localhost
      },
      manifest: {
        name: "ChargerPoin Id",
        short_name: "ChargerPoin",
        description: "Aplikasi EV Charging",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            // Ini ikon sementara (bisa diganti URL logomu nanti)
            src: "https://cdn-icons-png.flaticon.com/512/3505/3505856.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "https://cdn-icons-png.flaticon.com/512/3505/3505856.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.svg", "**/*.csv"],
});
