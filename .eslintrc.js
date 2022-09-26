module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "plugin:@next/next/recommended", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "linebreak-style": "off",
    "import/prefer-default-export": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "prettier/prettier": ["error", {
      endOfLine: "auto"
    }],
    "react/function-component-definition": ["error", {
      namedComponents: "arrow-function",
      unnamedComponents: "arrow-function"
    }],
    "react/jsx-filename-extension": [2, {
      extensions: [".ts", ".tsx"]
    }],
    "import/extensions": ["error", "ignorePackages", {
      ts: "never",
      tsx: "never"
    }]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};