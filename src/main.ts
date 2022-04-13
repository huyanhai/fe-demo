import { createApp } from 'vue';
import App from './App.vue';

import { setupPinia } from '@/store/index';
import { setupI18n } from '@/locales';
import { setupRoute } from '@/router';
import { setupNProgress } from '@/plugins/nprogress';

import 'tailwindcss/tailwind.css';

async function bootstrap() {
  const app = createApp(App);

  setupRoute(app);
  setupPinia(app);
  await setupI18n(app);
  setupNProgress();

  app.mount('#app');
}

bootstrap();
