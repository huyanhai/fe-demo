import eslint from '@eslint/js';
import react from 'eslint-plugin-react';
import tsEslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default [
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      // 全局配置,识别浏览器全局变量,如document,window等
      globals: {
        ...globals.browser
      }
    },
    plugins: { react },
    // 全局规则
    rules: {
      // 优先级大于typescript-eslint
      // 'no-unused-vars': 'warn',
      'no-undef': 'error',

      // ts文件配置
      '@typescript-eslint/no-unused-vars': 'warn'
    },
    files: ['src/**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    // 忽略文件
    ignores: [
      'node_modules',
      'dist',
      'commitlint.config.js',
      'eslint.config.mjs'
    ]
  }
];
