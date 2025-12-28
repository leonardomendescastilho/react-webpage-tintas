 import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      { find: "@/sections", replacement: path.resolve(__dirname, "./src/components/sections") },
      { find: "@/layout", replacement: path.resolve(__dirname, "./src/components/layout") },
      { find: "@/ui", replacement: path.resolve(__dirname, "./src/components/ui") },
      { find: "@/components", replacement: path.resolve(__dirname, "./src/components") },
      { find: "@/data", replacement: path.resolve(__dirname, "./src/data") },
      { find: "@/lib", replacement: path.resolve(__dirname, "./src/lib") },
      { find: "@", replacement: path.resolve(__dirname, "./src") },
    ],
  },
})
