module.exports = {
  eslint: {
    env: {
      node: true,
      es6: true,
      jest: true,
      browser: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      'no-console': 'warn',
    },
  },
};
