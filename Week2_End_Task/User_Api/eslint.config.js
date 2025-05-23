import eslintPluginPrettier from 'eslint-plugin-prettier';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default await tseslint.config({
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
      plugins: {
        prettier: eslintPluginPrettier,
      },
      rules: {
        'prettier/prettier': 'error',
      },
    },
  ],
});
