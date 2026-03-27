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
      manifest: {// ... (kode import lainnya jangan diubah)

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        // Ini nama lengkap aplikasi (untuk App Store)
        name: 'ChargerPoin ID - Smart EV Charging Network', 
        
        // --- PERUBAHAN NAMA DI SINI ---
        // Ini nama yang muncul di bawah ikon di HP
        short_name: 'ChargerPoin ID', 
        
        description: 'Aplikasi Smart EV Charging Network',
        theme_color: '#3b82f6', // Sesuaikan warna dengan logo biru
        background_color: '#ffffff',
        display: 'standalone',
        
        // --- PERUBAHAN IKON DI SINI ---
        icons: [
          {
            // Vercel/HP akan mencari file ini di folder 'public'
            src: '/Logo Apps ChargerPoinid.png', 
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/Logo Apps ChargerPoinid.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  // ... (kode lainnya jangan diubah)
})},
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.svg", "**/*.csv"],
});
