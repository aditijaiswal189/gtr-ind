// .eslintrc.js (or .eslintrc.cjs)
const path = require("path");

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: path.resolve(__dirname, "tsconfig.json"),
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "next/core-web-vitals",             // Next.js + React best practices
    "plugin:@typescript-eslint/recommended" // TypeScript-specific linting
  ],
  rules: {
    // unused vars → warning
    "@typescript-eslint/no-unused-vars": "warn",

    // allow <img> (you can still migrate to next/image later)
    "@next/next/no-img-element": "warn",

    // allow unescaped quotes in JSX text
    "react/no-unescaped-entities": "warn"
  }
};
