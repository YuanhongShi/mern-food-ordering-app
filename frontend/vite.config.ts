import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
// 如果有其他插件，也一起导入

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // ... 其他插件
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})