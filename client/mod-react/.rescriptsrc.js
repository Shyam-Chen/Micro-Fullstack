const webpack = require('webpack');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

const { name } = require('./package');

module.exports = {
  webpack: (config) => {
    config.entry = config.entry.filter((e) => !e.includes('webpackHotDevClient'));

    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';

    config.plugins = config.plugins.filter(
      (plugin) => !(plugin instanceof webpack.HotModuleReplacementPlugin),
    );

    config.resolve.plugins = config.resolve.plugins.filter(
      (plugin) => !(plugin instanceof ModuleScopePlugin),
    );

    return config;
  },

  devServer: (_) => {
    const config = {};

    config.port = '8002';
    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;

    config.hot = false;
    config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
};
