import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative paths work on both the GitHub Pages project URL and a custom domain.
  base: './',
  plugins: [react()],
})
