/** @format */

module.exports = {
  preset: 'react-native',
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-safe-area-context|@react-navigation/stack|react-navigation|@react-navigation/.* )/)',
  ],
  setupFiles: ['./__mocks__/setup.js'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleNameMapper: {},
};
