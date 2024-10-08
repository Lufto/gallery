module.exports = {
	root: true,
	plugins: ['@typescript-eslint', 'import', 'prettier'],
	extends: ['airbnb', 'airbnb-typescript', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.eslint.json',
	},
	ignorePatterns: ['dist/'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: ['./vite.config.ts'],
			},
		],
	},
};
