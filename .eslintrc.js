module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'google', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'valid-jsdoc': [
      0,
      {
        requireParamDescription: false,
        requireReturnDescription: false,
        requireReturn: false,
        prefer: { returns: 'return' },
      },
    ],
    'require-jsdoc': [
      0,
      {
        require: {
          'function-declaration': true,
          'method-definition': true,
          'class-declaration': true,
        },
      },
    ],
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
};
