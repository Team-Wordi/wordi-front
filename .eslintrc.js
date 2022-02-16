module.exports = {
  root: true,
  extends: [
    "plugin:@typescript-eslint/recommended",
     // typescript 표준 규칙 모음
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    // import 관련 규칙 모음

    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react",
     // prettier 관련 규칙 모음
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
};
