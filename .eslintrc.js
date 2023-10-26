module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        "plugin:vue/base",
    ],
    rules: {
        'brace-style': [2, 'stroustrup', { 'allowSingleLine': true }],

        'vue/max-attributes-per-line': 0,
        'vue/valid-v-for': 0,

        // allow async-await
        'generator-star-spacing': 'off',

        // allow paren-less arrow functions
        'arrow-parens': 0,
        'one-var': 0,

        // 'import/first': 0,
        // 'import/named': 2,
        // 'import/namespace': 2,
        // 'import/default': 2,
        // 'import/export': 2,
        'import/extensions': 0,
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0,

        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    },
};
