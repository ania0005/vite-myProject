import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/vite-myProject/",
  build: {
    outDir: "dist",
  },
  port: 5173,
});