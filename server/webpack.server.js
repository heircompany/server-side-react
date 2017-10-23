/* 
*
*   WEBPACK BUNDLE FOR NODE ENGINE
*
*/
const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js');

const BUILD_DIR = 'build';

const config = {
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, BUILD_DIR)
  },
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
