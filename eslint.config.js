import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "typescript-eslint";
import stylisticJsPlugin from "@stylistic/eslint-plugin-js";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const tsEslintConfig = tseslint.config(
  {
    ignores: [
      ".next",
      ".vercel",
      "node_modules",
      "src/app/(payload)",
      "src/payload-types.ts",
    ],
  },
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    extends: [
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    plugins: {
      "@stylistic/js": stylisticJsPlugin,
    },
    rules: {
      "@typescript-eslint/array-type": ["warn", { default: "array" }],
      "@typescript-eslint/consistent-type-definitions": ["off"],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-misused-promises": [
        2,
        {
          checksVoidReturn: { attributes: false },
        },
      ],
      "@stylistic/js/array-bracket-newline": ["warn", "consistent"],
      "@stylistic/js/array-element-newline": ["warn", "consistent"],
      "@stylistic/js/object-curly-newline": ["warn", { "consistent": true }],
      "@stylistic/js/quotes": [
        "warn",
        "double",
        { "avoidEscape": true, "allowTemplateLiterals": false },
      ],
      "@stylistic/js/comma-dangle": ["warn", "always-multiline"],
      "@stylistic/js/object-curly-spacing": ["warn", "always"],
      "@stylistic/js/array-bracket-spacing": ["warn", "never"],
      "@stylistic/js/arrow-parens": ["warn", "always"],
      "@stylistic/js/semi": ["warn", "always"],
      "@stylistic/js/indent": ["warn", 2],
      "@stylistic/js/function-paren-newline": ["warn", "multiline-arguments"],
      "@stylistic/js/no-trailing-spaces": ["warn"],
      "@stylistic/js/eol-last": ["warn", "always"],
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
);

export default tsEslintConfig;
