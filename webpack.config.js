/**
 * @file webpack.config.js
 */

const fs = require('fs');
const path = require('path');

const {name} = require('./package.json');

let filesname = fs.readdirSync(path.resolve(__dirname, './src'));
const entry = (() => {
  const files = {};
  filesname && filesname.forEach(item => {
    if (item !== 'index.ts') {
      const name = `/${item}/index`;
      files[name] = `./src/${item}/index.ts`;
    } else {
      files['osc-tool.min'] = `./src/index.ts`;
    }
  });
  return files;
})();

module.exports = {
  mode: 'production',
  entry: entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: name,
    libraryTarget: 'umd',
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'node_modules')],
    extensions: ['.js', '.ts'],
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
  ],
};
