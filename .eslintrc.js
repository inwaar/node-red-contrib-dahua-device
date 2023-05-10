module.exports = {
    root: true,
    env: {
        node: true,
        es2021: true,
    },
    globals: {
        RED: true,
    },
    plugins: ['jsdoc', 'html', 'prettier'],
    overrides: [
        {
            files: ['*.js', '*.html'],
            extends: [
                'eslint:recommended',
                'plugin:jsdoc/recommended',
                'prettier',
            ],
            rules: {
                'prettier/prettier': 'error',
                'jsdoc/require-property-description': 'off',
                'jsdoc/require-param-type': 'off',
                'jsdoc/require-param-description': 'off',
                'jsdoc/require-returns-description': 'off',
                'jsdoc/check-property-names': 'off',
                'jsdoc/sort-tags': 'error',
            },
        },
    ],
};
