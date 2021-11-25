module.exports = {
	sort: true,
	keySeparator: false,
	namespaceSeparator: false,
	defaultValue: function (locale, namespace, key) {
		return key;
	},
	input: ['src/**/*.{ts,tsx}', 'pages/**/*.{ts,tsx}'],
	output: 'src/public/locales/$LOCALE/$NAMESPACE.json',
	locales: ['en', 'es'],
};
