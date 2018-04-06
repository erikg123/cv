const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    name: 'client',
    entry: path.resolve(__dirname, 'client', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle-client.js'
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      hot: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './client/index.html',
        filename: './index.html'
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
  },
  {
    name: 'server',
    entry: path.resolve(__dirname, 'server', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle-server.js'
    },
    target: 'node',
    externals: [nodeExternals()]
  }
];
