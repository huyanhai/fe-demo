import { defineStore } from 'pinia';
import piniaStore from '@/store/index';

export const baseStore = defineStore('base', {
  state: () => ({
    lang: 'zh'
  }),
  getters: {},
  actions: {
    setLang(lang: string) {
      this.lang = lang;
    }
  }
});

export function useBaseStore() {
  return baseStore(piniaStore);
}
