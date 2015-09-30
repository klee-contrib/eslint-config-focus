module.exports = {
    "settings": {
        "ecmascript": 6
    },
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "filenames"
    ],
    "ecmaFeatures": {
        "blockBindings": true,
        "forOf": true,
        "classes": true,
        "templateStrings": true,
        "defaultParams": true,
        "superInFunctions": true,
        "modules": true,
        "arrowFunctions": true,
        "objectLiteralComputedProperties": true,
        "objectLiteralDuplicateProperties": true,
        "objectLiteralShorthandMethods": true,
        "objectLiteralShorthandProperties": true,
        "spread": true,
        "destructuring": true
    },
    "globals": {
        "jQuery": false,
        "$": true,
        "Focus": true,
        "FocusComponents": true,
        "require": true,
        "Backbone": true,
        "React": true,
        "Fmk": true,
        "_": true,
        "Promise": true,
        "module": true
    },
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        "valid-jsdoc": [
            2,
            {
                "requireParamDescription": true,
                "requireReturn": false
            }
        ],
        "quotes": [2, "single"],
        "eqeqeq": 2,
        "strict": 2,
        "camelcase": 2,
        "no-underscore-dangle": 0,
        "new-cap": 2,
        "react/display-name": 2,
        "react/jsx-boolean-value": 2,
        "react/jsx-closing-bracket-location": 2,
        "react/jsx-curly-spacing": 2,
        "react/jsx-indent-props": 2,
        "react/jsx-max-props-per-line": 2,
        "react/jsx-no-duplicate-props": 2,
        "react/jsx-no-literals": 2,
        "react/jsx-no-undef": 2,
        "react/jsx-quotes": 2,
        "react/jsx-sort-prop-types": 2,
        "react/jsx-sort-props": 2,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/no-danger": 2,
        "react/no-did-mount-set-state": 2,
        "react/no-did-update-set-state": 2,
        "react/no-direct-mutation-state": 2,
        "react/no-multi-comp": 2,
        "react/no-unknown-property": 2,
        "react/prop-types": 2,
        "react/react-in-jsx-scope": 2,
        "react/require-extension": 2,
        "react/self-closing-comp": 2,
        "react/sort-comp": 2,
        "react/wrap-multilines": 2,
        "comma-dangle": 2,
        "no-var": 2,
        "indent": [2, 4, {"SwitchCase": 1}],
        "brace-style": [2, "1tbs", { "allowSingleLine": true }],
        "comma-style": [2, "last"],
        "func-names": 2,
        "key-spacing": [2, {"beforeColon": false,"afterColon": true}],
        "max-nested-callbacks": [2, 3],
        "no-multiple-empty-lines": 2,
        "quote-props": [2, "as-needed"],
        "no-use-before-define": 2,
        "default-case": 2,
        "dot-notation": 2,
        "no-alert": 2,
        "no-eval": 2,
        "no-lone-blocks": 2,
        "no-multi-spaces": 2,
        "no-native-reassign": 2,
        "no-multi-str": 2,
        "no-new-wrappers": 2,
        "no-redeclare": 2,
        "no-return-assign": 2,
        "no-self-compare": 2,
        "no-throw-literal": 2,
        "no-unused-expressions": 2,
        "no-warning-comments": [1, { "terms": ["todo", "fixme"], "location": "anywhere" }],
        "radix": 2,
        "wrap-iife": 2,
        "no-constant-condition": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty": 2,
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-sparse-arrays": 2,
        "no-unreachable": 2,
        "use-isnan": 2,
        "valid-typeof": 2,
        "filenames/filenames": [2, "^[a-z-]+$"],
        "space-before-blocks": 2,
        "arrow-spacing": 2
    }
};
