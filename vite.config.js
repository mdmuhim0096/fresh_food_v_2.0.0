import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/fresh_food_v_2.0.0/",
  build:{
    chunkSizeWarningLimit: 1500
  }
})
