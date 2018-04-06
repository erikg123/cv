const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const config = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env']
        }
      }
    }
  ]
};

const htmlPlugin = new HtmlWebPackPlugin({
  template: './client/index.html',
  filename: './index.html'
});

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
    module: config,
    plugins: [
      htmlPlugin,
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
    module: config,
    target: 'node',
    externals: [nodeExternals()]
  }
];
