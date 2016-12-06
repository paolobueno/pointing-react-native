const resolve = require('path').resolve
const webpack = require('webpack')
const config = {
  devServer: {
    contentBase: resolve(__dirname, 'src')
  },
  entry: resolve(__dirname, '../index.web.js'),
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  debug: true,
  devtool: 'inline-source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: { cacheDirectory: true }
    }, {
      test: /\.(gif|jpe?g|png|svg)$/,
      loader: 'url-loader',
      query: { name: '[name].[hash:16].[ext]' }
    }, {
      test: /\.json$/,
      exclude: /node_modules/,
      loader: 'json-loader'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  }
}
module.exports = config
