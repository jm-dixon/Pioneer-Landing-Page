module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'max-len': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'arrow-body-style': 'off',
        'brace-style': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // 'object-curly-newline': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-plusplus': 'off',
        // 'vuejs-accessibility/mouse-events-have-key-events': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // 'vuejs-accessibility/click-events-have-key-events': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/multi-word-component-names': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      },
    },
  ],
}
