var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'bundle'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test:/\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader:'file?name=assets/[name].[hash].[ext]'
      },
    ]
  }
}
