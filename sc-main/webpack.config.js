const path = require('path');

const webpackConfig = {
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-es2015'],
          },
        },
      },
    ],
  },
  watch: true,
};

module.exports = webpackConfig;
