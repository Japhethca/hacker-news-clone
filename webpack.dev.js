const path = require('path');
const dotenv = require('dotenv');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

dotenv.config();

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: 'inline-source-map',
  entry: ['regenerator-runtime/runtime','./src/Index.jsx'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: [' ', '.js', '.json', '.jsx']
  },
  module: {
    rules: [{
      test: /\.(jsx|js)$/,
      use: 'babel-loader'
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }
    ]
  },

  devServer: {
    contentBase: './dist',
    compress: true,
    open: true,
    historyApiFallback: true,
    port: 8000,
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Hacker News Clone',
      template: './index.html'
    }),
    new CleanWebpackPlugin(['./dist'])
  ]
};
