import type { Router } from 'vue-router';

import { useTitle } from '@vueuse/core';
import { useNProgress } from '@/plugins/nprogress';
import { i18n, setAppLang } from '@/locales';

// 页面进度条
function setProgress(router: Router) {
  const { NProgressStart, NProgressDone } = useNProgress();
  router.beforeEach(() => {
    NProgressStart();
  });
  router.afterEach(() => {
    NProgressDone();
  });
}

// 页面标题
function setTitle(router: Router) {
  router.afterEach(async (to) => {
    const { title } = to.meta;
    const { t } = i18n.global;
    if (title) {
      useTitle().value = (t as unknown as any)(title as never);
    }
  });
}

function setLang(router: Router) {
  router.beforeEach(async (from) => {
    const { lang } = from.query;
    if (lang) await setAppLang(lang as string);
  });
}

export function setupRouterGuard(router: Router) {
  setProgress(router);
  setLang(router);
  setTitle(router);
}
