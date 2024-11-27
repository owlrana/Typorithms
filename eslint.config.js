import eslintPlugin from '@typescript-eslint/eslint-plugin';
import eslintParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['node_modules', 'dist', 'build', '*.config.js'], // Files to ignore
    files: ['**/*.ts', '**/*.js'], // Files to lint
    languageOptions: {
      parser: eslintParser,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': eslintPlugin,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
];
