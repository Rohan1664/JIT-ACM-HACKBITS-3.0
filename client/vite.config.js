import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // allow image files like JPG
  assetsInclude: [
    '**/*.JPG',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.png',
    '**/*.avif',
    '**/*.webp'
  ],

  server: {
    port: 5173,
    open: true
  },

  build: {
    outDir: 'dist',
    sourcemap: false,

    // Optimize production build
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion']
        }
      }
    }
  }
})