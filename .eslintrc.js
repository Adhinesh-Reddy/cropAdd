module.exports = {
    root: true,
    extends: [
      "eslint:recommended",
      "plugin:prettier/recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier/@typescript-eslint"
    ],
    parser: "@typescript-eslint/parser",
    env: {
      browser: true,
      es6: true,
      jest: true,
      node: true
    },
    parserOptions: {
      ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
      sourceType: "module", // Allows for the use of imports
      ecmaFeatures: {
        jsx: true, // Allows for the parsing of JSX
        arrowFunctions: true
      }
    },
    plugins: ["react", "@typescript-eslint", "prettier"],
    settings: {
      react: {
        version: "detect"
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          paths: ["./src"]
        }
      }
    },
    rules: {
      // Find more rules at https://eslint.org/docs/rules/
      "comma-dangle": ["error", "never"],
      "function-paren-newline": "off",
      "global-require": "off",
      "no-unused-vars": "error",
      "import/no-dynamic-require": "off",
      "no-inner-declarations": "off",
      "class-methods-use-this": "off",
      "import/extensions": "off",
      "import/prefer-default-export": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-var-requires": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
      "no-alert": "error",
      "no-console": "off",
      "no-duplicate-imports": "error",
      "no-multi-spaces": "error",
      "no-multiple-empty-lines": ["error", {max: 1, maxEOF: 1, maxBOF: 0}],
      'prettier/prettier': 0,
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/ban-ts-comment":0
    }
  };