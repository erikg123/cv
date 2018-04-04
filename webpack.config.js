const path = require('path');
const nodeExternals = require('webpack-node-externals');

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

module.exports = [
  {
    // client
    entry: path.resolve(__dirname, 'client', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle-fe.js'
    },
    module: config
  },
  {
    // server
    entry: path.resolve(__dirname, 'server', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle-api.js'
    },
    module: config,
    target: 'node',
    externals: [nodeExternals()]
  }
];
