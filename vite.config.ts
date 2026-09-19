import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Local/default: '/'. GitHub Pages project site: set VITE_BASE=/wset-tasting-guide/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
})
