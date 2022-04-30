module.exports = {
	parser: '@typescript-eslint/parser',
	extends: ['plugin:@typescript-eslint/recommended'],
	plugins: [
		'@typescript-eslint/eslint-plugin',
		'simple-import-sort',
		'unused-imports',
	],
	parserOptions: {
		project: 'tsconfig.eslint.json',
		sourceType: 'module',
	},
	rules: {
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',

		'unused-imports/no-unused-imports-ts': 'error',

		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
	},
};
