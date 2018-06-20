const path = require('path');
const dotenv = require('dotenv');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

dotenv.config();

module.exports = {
  mode: "production",
  entry: "./src/Index.jsx",
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
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Hacker News Clone',
      template: './index.html'
    }),
    new CleanWebpackPlugin(['./dist'])
  ]
};
