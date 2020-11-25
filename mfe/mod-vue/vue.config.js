const path = require('path');

const pkg = require('./package');

module.exports = {
  configureWebpack: {
    output: {
      jsonpFunction: `webpackJsonp_${pkg.name}`,
      library: `${pkg.name}-[name]`,
      libraryTarget: 'umd',
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
        '~': path.join(__dirname, '../app-components/dist'),
      },
    },
  },
  chainWebpack(config) {
    config.module.rules.delete('eslint');
  },
  devServer: {
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    hot: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    port: 8001,
    progress: false,
  },
};
