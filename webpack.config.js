require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const processHTMLPages = require('./processHTMLHelper.js');

const extractCSS = new ExtractTextPlugin('style.css');
const plugins = [
  extractCSS,
].concat(processHTMLPages());

module.exports = {
  entry: {
    app:'./source/index.js'
  },
  module: {
    rules: [
      {
        test: [/\.scss$/i, /\.sass$/i, /\.css$/],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: './source'
        }
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.es6'],
  },
  output: {
    path: __dirname + '/build',
    filename: 'index.js',
  },
  devServer: {
    contentBase: './source'
  },
  plugins,
};
