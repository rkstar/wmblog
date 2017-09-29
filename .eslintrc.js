module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  ecmaFeatures: {
    jsx: true,
  },
  rules: {
    'global-require': 0,
    'no-extra-parens': 0, // Interferes with jsx
    'no-underscore-dangle': 0, // Mongo _id
    'react/prefer-stateless-function': 1, // We'll choose manually
    'react/prop-types': 0, // Slows down while prototyping / experimenting
    'react/jsx-filename-extension': [1, { 'extensions': ['.js'] }],
    'react-native/no-unused-styles': 2,
    'react-native/no-inline-styles': 2,
    'react-native/split-platform-components': 0,
    'react-native/no-color-literals': 2,
    'react/forbid-prop-types': 0,
    'jsx-a11y/href-no-hash': 0,
    'max-len': 1, // Sometimes necessary to have long strings and not risk whitespace
    'no-param-reassign': [2, { props: false }], // Allows assignment of new properties
    'comma-style': 2,
    'new-cap': 0, // We don't have control over external dependecies using this
    'no-confusing-arrow': 0,
    'no-return-await': 0,
    // these next 3 lines are becuase eslint does not like to play nice with meteor/ imports
    'import/no-unresolved': [2, { ignore: ['^meteor/'] }],
    'import/no-extraneous-dependencies': 0,
    'import/extensions': ['off', 'never'],
  },
  plugins: [
    'react',
    'react-native',
  ],
  globals: {
    fetch: false,
  },
};
