import type { App } from 'vue';
import { createPinia } from 'pinia';

export * from './modules/base';
// import here

const pinia = createPinia();

export const setupPinia = (app: App) => {
  app.use(pinia);
};

export default pinia;
