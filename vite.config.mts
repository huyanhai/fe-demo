import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import babel from '@rollup/plugin-babel';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default ({ mode }) => {
  const { VITE_APP_BASE_API, VITE_APP_BASE_HOST } = loadEnv(
    mode,
    process.cwd()
  );
  // https://vitejs.dev/config/
  return defineConfig({
    plugins: [vue(), vueJsx(), babel({ babelHelpers: 'bundled' })],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    server: {
      hmr: { overlay: false },
      port: 8090,
      open: false,
      cors: false,
      host: '0.0.0.0',
      proxy: {
        [VITE_APP_BASE_API]: {
          target: VITE_APP_BASE_HOST,
          changeOrigin: true,
          rewrite: (path) =>
            path.replace(new RegExp(`^${VITE_APP_BASE_API}`), '')
        }
      }
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'js/[name]-[hash].js',
          chunkFileNames: 'js/[name]-[hash].js',
          assetFileNames(chunkInfo) {
            if (chunkInfo.name?.endsWith('.css')) {
              return 'css/[name]-[hash].[ext]';
            }
            return 'assets/[name]-[hash].[ext]';
          },
          manualChunks(id) {
            if (id.includes('react')) {
              return 'react';
            }
            return 'other';
          },
          // 小于5m尝试合并
          experimentalMinChunkSize: 5 * 1024
        }
      }
    }
  });
};
