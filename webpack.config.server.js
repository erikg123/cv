const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = [
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
