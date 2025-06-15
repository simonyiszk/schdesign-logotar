import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "typescript-eslint";
import stylisticPlugin from "@stylistic/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const tsEslintConfig = tseslint.config(
  ...compat.extends("next/core-web-vitals"),
  {
    ignores: [
      ".next",
      ".vercel",
      "node_modules",
      "src/@generated",
      "src/app/(payload)",
      "eslint.config.js",
    ],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    extends: [
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    plugins: {
      "@stylistic": stylisticPlugin,
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
      "@stylistic/array-bracket-newline": ["warn", "consistent"],
      "@stylistic/array-element-newline": ["warn", "consistent"],
      "@stylistic/object-curly-newline": ["warn", { "consistent": true }],
      "@stylistic/quotes": [
        "warn",
        "double",
        { "avoidEscape": true, "allowTemplateLiterals": false },
      ],
      "@stylistic/comma-dangle": ["warn", "always-multiline"],
      "@stylistic/object-curly-spacing": ["warn", "always"],
      "@stylistic/array-bracket-spacing": ["warn", "never"],
      "@stylistic/arrow-parens": ["warn", "always"],
      "@stylistic/semi": ["warn", "always"],
      "@stylistic/indent": ["warn", 2],
      "@stylistic/function-paren-newline": ["warn", "multiline-arguments"],
      "@stylistic/no-trailing-spaces": ["warn"],
      "@stylistic/eol-last": ["warn", "always"],
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
