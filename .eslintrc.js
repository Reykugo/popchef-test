module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // Disable rules handled by prettier
    '@typescript-eslint/indent': 'off',
    'react/jsx-one-expression-per-line': 'off',

    // Disables rules we choose not to apply
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',

    'react/sort-comp': 'off',
    'import/no-unresolved': 'off',

    // Disables rules not compatible / useful with typescript
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

    // Allow importing devDependencies in storybook
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.stories.{ts,tsx}'] },
    ],

    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',

    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
  },
  globals: {
    it: 'readonly',
    describe: 'readonly',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['jest', 'cypress'],
  env: {
    jest: true,
    'cypress/globals': true,
  },
  overrides: [
    {
      files: ['*.spec.js'],
      rules: {
        'no-unused-expressions': 0,
      },
    },
  ],
};
