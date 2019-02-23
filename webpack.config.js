var path = require('path');

var TerserPlugin = require('terser-webpack-plugin');
var webpack = require("webpack");

var plugins = []; // if using any plugins for both dev and production
var devPlugins = []; // if using any plugins for development

var prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
];

plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
)

module.exports = {
  entry: './entry.jsx',
  output: {
    path: path.resolve(__dirname),
    filename: './lib/bundle.js',
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: [/\.js?$/, /\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', ".jsx", '*']
  },
  optimization: {
    minimizer: [new TerserPlugin()]
  }
};
