module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es2021': true,
		'node': true
	},
	// 'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 'latest' 
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'key-spacing': [2, {
			'beforeColon': false,
			'afterColon': true
		}],
		'object-curly-spacing': ['error', 'always'],
		'comma-spacing': ['error', { 'before': false, 'after': true }],
	}
};
