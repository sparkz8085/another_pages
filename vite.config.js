import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/subscribe': {
        target: 'https://script.google.com',
        changeOrigin: true,
        secure: true,
        rewrite: () => '/macros/s/AKfycbwtUl3L7gMMAND5LSV0OM2i6LO_ZHM-CcvCYhENfZaiHxnciNPa_TE36DZg2NF63Czc/exec',
      },
    },
  },
});