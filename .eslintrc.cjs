module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  extends: [
    "eslint:recommended",                   // ESLint recommended rules
    "plugin:react/recommended",             // React recommended rules
    "plugin:@typescript-eslint/recommended", // TypeScript recommended rules
    "plugin:@typescript-eslint/eslint-recommended", // ESLint overrides for TypeScript
    "prettier",                             // Prettier rules
    "plugin:prettier/recommended",          // Prettier plugin integration
    "plugin:react-hooks/recommended",       // Recommended rules for React hooks
    "plugin:storybook/recommended"          // Recommended rules for Storybook
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-refresh"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
