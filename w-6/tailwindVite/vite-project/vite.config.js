import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindConfig from './tailwind.config';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss('./tailwind.config')],
    },
  },
});
