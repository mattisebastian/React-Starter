var path = require('path');
var webpack = require('webpack');

var config = {
  context: path.join(__dirname, 'src'),
  entry: [
  //'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
  'webpack-hot-middleware/client', // "only" prevents reload on syntax errors
  './main'
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },

  plugins: [
    // Webpack 1.0
    //new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel?cacheDirectory=true'],
      include: path.join(__dirname, 'src'),
    }]
  },
  // resolveLoader: {
  //   root: [
  //     path.join(__dirname, 'node_modules'),
  //   ],
  // },
  // resolve: {
  //   root: [
  //     path.join(__dirname, 'node_modules'),
  //   ],
  // },
};
module.exports = config;