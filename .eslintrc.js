module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'overrides': [
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint'
    ],
    'rules': {
        'quotes': ['warn', 'single'],
        'brace-style': [
            'warn',
            '1tbs',
            {
                'allowSingleLine': true
            }
        ],
        'guard-for-in': ['error'],
        'curly': ['warn'],
        'prefer-arrow-callback': [
            'error',
            {
                'allowUnboundThis': false
            }
        ],
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'prettier/prettier': ['off', {}],
        'disable-next-line': 'off',
        'no-console': 'off',
        'no-empty-function': ['warn']
    }
};
