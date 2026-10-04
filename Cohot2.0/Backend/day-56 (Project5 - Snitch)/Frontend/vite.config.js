import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        // Froward api starts with /api
        target: "http://localhost:3000", // To this
        changeOrigin: true,
        secure: false, // 'http' clients can also make requests
        // secure: true, // only 'https' clients can make requests
      },
    },
  },
});
