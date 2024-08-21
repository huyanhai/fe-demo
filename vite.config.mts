import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import babel from '@rollup/plugin-babel';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), babel({ babelHelpers: 'bundled' })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames(chunkInfo) {
          if (chunkInfo.name.endsWith('.css')) {
            return 'css/[name]-[hash].[ext]';
          }
        },
        manualChunks(id) {
          if (id.includes('react')) {
            return 'react';
          }
        },
        // 小于5m尝试合并
        experimentalMinChunkSize: 5 * 1024
      }
    }
  }
});
