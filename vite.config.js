import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/P5R-Calendar/',
  build: {
    outDir: 'build',
  },
})
