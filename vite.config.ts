 import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/sections": path.resolve(__dirname, "./src/components/sections"),
      "@/layout": path.resolve(__dirname, "./src/components/layout"),
      "@/ui": path.resolve(__dirname, "./src/components/ui"),
      "@/data": path.resolve(__dirname, "./src/data"),
      "@/lib": path.resolve(__dirname, "./src/lib"),
    },
  },
})
