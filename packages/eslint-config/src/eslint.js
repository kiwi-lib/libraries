module.exports = {
	parser: '@typescript-eslint/parser',
	extends: ['plugin:@typescript-eslint/recommended'],
	plugins: ['@typescript-eslint/eslint-plugin', 'unused-imports'],
	rules: {
		'@typescript-eslint/no-unused-vars': ['error'],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',

		'unused-imports/no-unused-imports-ts': 'error',
	},
};
