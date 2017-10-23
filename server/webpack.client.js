/* 
*
*   WEBPACK BUNDLE FOR BROWSER
*
*/
const path = require('path');
const merge = require('webpack-merge');
const WorkboxBuildWebpackPlugin = require('workbox-webpack-plugin');
const baseConfig = require('./webpack.base.js');

const PUBLIC_DIR = 'public';

const config = {
  entry: './src/client/index.js',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, PUBLIC_DIR)
  },
  plugins: [
    new WorkboxBuildWebpackPlugin({
      globDirectory: PUBLIC_DIR,
      globPatterns: ['**/*.{html,js,css}'],
      globIgnores: ['ignore.html'],
      swDest: path.join(PUBLIC_DIR, 'sw.js')
    })
  ]
};

module.exports = merge(baseConfig, config);
