import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // permite acesso de outros dispositivos na rede
    port: 5173,        // ou outro se preferir
  },
})
