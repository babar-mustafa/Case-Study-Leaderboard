module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['./src'],
        alias: {
          '@constants': './src/constants',
          '@store': './src/state',
          '@types': './src/types',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@components': './src/components/index.ts',
          '@utils': './src/utils',
          '@routes': './src/routes',
        },
        cwd: 'babelrc',
      },
    ],
  ],
};
