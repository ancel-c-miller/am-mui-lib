import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import pathsPlugin from "eslint-plugin-paths";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      paths: pathsPlugin,
      "simple-import-sort": simpleImportSort
    },
    rules: {
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // Side effect imports
            ["^\\u0000"],
            // Node.js built-in modules
            ["^node:"],
            // Packages (npm packages and Node.js built-ins without node:)
            ["^@?\\w"],
            // Library imports
            // Components imports
            ["^@components/(.*)$"],
            // Theme imports
            ["^@theme/(.*)$"],
            // Lib imports last for eslint to recognize the path alias
            ["^@lib/(.*)$", "^@libs/(.*)$"],
            // Absolute imports and other imports such as Vue-style @/foo
            ["^/"],
            // Relative imports
            ["^\\./(?=.*/)(?!.*\\u0000$)", "^\\.(?!.*\\u0000$)", "^\\.\\./"],
          ],
        },
      ],
    }
  },
])
