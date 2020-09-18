module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "plugin:react/recommended",
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
    "jsx-quotes": "error",
    semi: ["error", "always"],
    "no-var": "error",
    "comma-dangle": "error",
    "comma-spacing": "error",
    indent: "error",
    "multiline-comment-style": "error",
    "no-multiple-empty-lines": "error",
    "capitalized-comments": "error",
    "no-useless-return": "error",
    "prefer-promise-reject-errors": 0
  }
}
