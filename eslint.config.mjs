import globals from 'globals';
import pluginJs from '@eslint/js';
import typescriptLint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  pluginJs.configs.recommended,
  ...typescriptLint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
  {
    files: ['src/**/*.vue'],
    languageOptions: { parserOptions: { parser: typescriptLint.parser } },
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  },
  {
    files: ['src/**/*.{js,mjs,cjs,ts,vue}'],
    rules: {
      'no-undef': 'error',
      complexity: ['error', 10] // 圈复杂度
    }
  },
  { languageOptions: { globals: globals.browser } },
  {
    ignores: [
      'node_modules',
      'dist',
      'commitlint.config.js',
      'eslint.config.mjs',
      'plop',
      'tailwind.config.js'
    ]
  }
];
