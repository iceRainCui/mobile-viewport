module.exports = {
  root: true, // 停止向上查找父级目录中的配置文件 只作用于当前目录
  parser: 'vue-eslint-parser', // 指定要使用的解析器
  plugins: ['@typescript-eslint', 'prettier'], // eslint-plugin- 可以省略
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': [2, { ignore: ['^@'] }],
    '@typescript-eslint/no-unsafe-member-access': 'off',
    'no-plusplus': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          arguments: false,
          attributes: false,
        },
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          'state', // for vuex state
          'config',
          'proxy',
        ],
      },
    ],
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:prettier/recommended',
  ],
  // 给解析器传入一些其他的配置参数
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: [
      './tsconfig.json',
      './tsconfig.app.json',
      './tsconfig.config.json',
      './tsconfig.vitest.json',
    ],
    extraFileExtensions: ['.vue'],
  },
  ignorePatterns: ['vite.config.ts', 'commitlint.config.js'],
};
