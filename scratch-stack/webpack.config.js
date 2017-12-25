var path = require('path');
module.exports = {
  entry: {
    app: ['./src/client/app.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: 'client-bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|lib|dist)/,
        loader: 'eslint',
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|lib|dist)/,
        loader: 'babel',
        query: {
          presets: ['latest'],
        }
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|lib|dist)/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.css$/,
        exclude: /(lib|dist)/,
        loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'],
      }
    ],
    eslint: {
      configFile: './.eslintrc',
      emitWarning: true,
    },
  },
};
