module.exports = {
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:import/warnings", "plugin:react/recommended", "prettier/react"],
  plugins: ["react", "react-hooks"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-var": "warn",
    "prefer-const": "error",
    "no-console": "off",
    "no-use-before-define": "warn",
    "react/no-typos": "error",
    "react/jsx-fragments": ["warn", "syntax"],
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "react/boolean-prop-naming": ["error", { rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+", validateNested: true }],
    // "react-hooks/exhaustive-deps": "warn"
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
