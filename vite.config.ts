import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default ({ mode }) => {
  const { VITE_APP_BASE_API, VITE_APP_BASE_HOST } = loadEnv(
    mode,
    process.cwd()
  );
  // https://vitejs.dev/config/
  return defineConfig({
    plugins: [vue()],
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
    }
  });
};
