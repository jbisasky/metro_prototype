const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: __dirname + "/app/dist/main.bundle.css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  context: __dirname + '/app',
  watch: true,
  entry: {
    app: ['./app.js', './scss/main.scss'],
    vendor: ['angular']  
  },
  output: {
    path: __dirname + '/app/dist',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
          loader: "style-loader" // creates style nodes from JS strings
      }, {
          loader: "css-loader" // translates CSS into CommonJS
      }, {
          loader: "sass-loader" // compiles Sass to CSS
      }]
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
    extractSass,
  ]
};