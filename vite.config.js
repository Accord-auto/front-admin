import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3900,
    host: true,
  },
  preview: {
    port: 3900,
    strictPort: true,
  },
});
