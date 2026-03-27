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
        name: "ChargerPoin ID - Smart EV Charging Network",
        short_name: "ChargerPoin ID",
        description: "Aplikasi Smart EV Charging Network",
        theme_color: "#3b82f6",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/Logo Apps ChargerPoinid.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/Logo Apps ChargerPoinid.png",
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
