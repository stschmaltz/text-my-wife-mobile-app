module.exports = {
    parser: `@typescript-eslint/parser`,
    parserOptions: {
        project: `./tsconfig.json`
    },
    root: true,
    extends: [
        '@react-native-community',
        'airbnb-typescript',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react'
    ],
    rules: {
        '@typescript-eslint/no-use-before-define': 0
    }
};
