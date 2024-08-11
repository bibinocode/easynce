/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting' // vue 放弃 eslint的代码格式化，交接给prettier
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
