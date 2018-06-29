const path = require('path');
const dotenv = require('dotenv');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

dotenv.config();

module.exports = {
  mode: 'production',
  entry: './src/Index.jsx',
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
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Hacker News Clone',
      template: './index.html'
    }),
    new CleanWebpackPlugin(['./dist']),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ]
};
