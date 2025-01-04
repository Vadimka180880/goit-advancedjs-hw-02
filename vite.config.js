import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(() => ({
  base: '/goit-advancedjs-hw-01/', 
  root: 'src', 
  publicDir: 'public', 
  build: {
    outDir: '../dist', 
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        gallery: path.resolve(__dirname, 'src/1-gallery.html'),
        form: path.resolve(__dirname, 'src/2-form.html'),
      },
    },
  },
  server: {
    open: '/public/index.html', 
  },
}));
