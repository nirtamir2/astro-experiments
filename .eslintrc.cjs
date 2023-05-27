module.exports = {
  root: true,
  extends: [
    "plugin:astro/all",
    "nirtamir2",
    "nirtamir2/recommended",
    "nirtamir2/typescript",
    // "nirtamir2/react",
    // "nirtamir2/query",
    // "nirtamir2/solid",
    // "nirtamir2/i18n", // It's also recommanded to use https://github.com/natura-cosmeticos/eslint-plugin-i18n-checker and https://github.com/nirtamir2/eslint-plugin-i18n-prefix
  ],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
    {
      files: ["solid/*.tsx"],
      extends: ["nirtamir2/solid"],
    },
    {
      files: ["react/*.tsx"],
      extends: ["nirtamir2/react"],
    },
  ],
  rules: {
    "import/no-unused-modules": 0,
    "tsdoc/syntax": 0,
  },
};
