import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// On GitHub Pages the app is served under /portfolio-front/
// In development (or if VITE_BASE_PATH is not set) use root.
const base = process.env.VITE_BASE_PATH ?? "/";

export default defineConfig({
  base,
  server: {
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
