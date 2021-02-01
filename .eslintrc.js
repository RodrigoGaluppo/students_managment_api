/* eslint-disable key-spacing */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console':'off',
    'linebreak-style':'off',
    'class-methods-use-this':'off',
    'import/first':'off',
    'no-param-reassign':'off',
    camelcase:'off',
  },
};
