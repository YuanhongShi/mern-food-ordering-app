import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from 'vite'


export default defineConfig({
  plugins: [
    react(),
    // ... 其他插件
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})