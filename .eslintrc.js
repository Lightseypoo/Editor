module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "standard"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: "module"
  },
  plugins: [
    "react"
  ],
  rules: {
    camelcase: "error",
    quotes: ["error", "double"],
    "space-before-function-paren": 0,
    "jsx-quotes": "error",
    semi: ["error", "always"],
    "no-var": "error",
    "comma-dangle": "error",
    "comma-spacing": "error",
    "indent": ["error", "tab"],
    "multiline-comment-style": "error",
    "no-multiple-empty-lines": "error",
    "capitalized-comments": "error",
    "no-useless-return": "error",
    "prefer-promise-reject-errors": 0
  }
}
