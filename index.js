module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
  ignorePatterns: ["node_modules/*", "build/*", "public/*", "!.prettierrc.js"], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ["eslint:recommended"],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      settings: { react: { version: "detect" } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended", // TypeScript rules
        "plugin:react/recommended", // React rules
        "plugin:react-hooks/recommended", // React hooks rules
        "plugin:jsx-a11y/recommended", // Accessibility rules
        "plugin:prettier/recommended", // Prettier recommended rules
      ],
      rules: {
        "react/prop-types": "off",

        "@typescript-eslint/no-unused-vars": ["error"],

        "padding-line-between-statements": [
          "error",
          {
            blankLine: "always",
            prev: [
              "block",
              "block-like",
              "cjs-export",
              "class",
              "export",
              "import",
            ],
            next: "*",
          },
          {
            blankLine: "any",
            prev: ["export", "import"],
            next: ["export", "import"],
          },
        ],

        quotes: ["error", "single"],

        // Includes .prettierrc.js rules
        "prettier/prettier": ["error", {}, { usePrettierrc: true }],
      },
    },
  ],
};
