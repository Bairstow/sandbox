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
          plugins: ['transform-object-rest-spread'],
        }
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|lib|dist)/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        // static css assets from node_modules should be loaded straight to the document
        test: /\.css$/,
        inclued: /node_modules/,
        loaders: ['style', 'css'],
      },
      {
        // src css assets to be loaded using css-modules where appropriate
        test: /\.css$/,
        exclude: /(node_modules|lib|dist)/,
        loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'],
      },
      {
        test: /\.json$/,
        loader: 'json',
      }
    ],
    eslint: {
      configFile: './.eslintrc',
      emitWarning: true,
    },
  },
  node: {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  }
};
