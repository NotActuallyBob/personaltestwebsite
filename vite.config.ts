import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [vue()],
  preview: {
    port: 3001
  },
  server: {
    allowedHosts: ["mikael.snellman.me"],
    port: 3001,
    host: true
  }
})
