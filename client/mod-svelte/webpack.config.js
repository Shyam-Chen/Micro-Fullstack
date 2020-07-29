const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ScriptExtHtmlPlugin = require('script-ext-html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const envify = require('process-envify');

const env = require('./env');
const pkg = require('./package');

const SOURCE_ROOT = path.join(__dirname, 'src');
const DISTRIBUTION_ROOT = path.join(__dirname, 'dist');

module.exports = ({ prod = false } = {}) => ({
  mode: prod ? 'production' : 'development',
  context: SOURCE_ROOT,
  entry: './main.js',
  output: {
    path: DISTRIBUTION_ROOT,
    filename: prod ? '[name].[hash].js' : '[name].js',
    chunkFilename: prod ? '[id].[chunkhash].js' : '[name].js',
    publicPath: '/',
    library: `${pkg.name}-[name]`,
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_${pkg.name}`,
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: [{ loader: 'svelte-loader' }],
      },
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: [{ loader: 'cache-loader' }, { loader: 'babel-loader' }],
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     { loader: 'css-loader', options: { importLoaders: 1 } },
      //     { loader: 'postcss-loader', options: { sourceMap: true } },
      //   ],
      // },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: { name: path.posix.join('assets', 'images/[name].[hash:8].[ext]') },
              },
            },
          },
        ],
      },
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: path.posix.join('assets', 'images/[name].[hash:8].[ext]') },
          },
        ],
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: { name: path.posix.join('assets', 'medias/[name].[hash:8].[ext]') },
              },
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: { name: path.posix.join('assets', 'fonts/[name].[hash:8].[ext]') },
              },
            },
          },
        ],
      },
    ].filter(Boolean),
  },
  resolve: {
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
    alias: {
      svelte: path.resolve('node_modules', 'svelte'),
      '~': SOURCE_ROOT,
    },
  },
  plugins: [
    new webpack.DefinePlugin(envify(env)),
    new HtmlPlugin({
      template: 'index.html',
      minify: prod && {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
      chunksSortMode: prod ? 'manual' : 'auto',
    }),
    new ScriptExtHtmlPlugin({
      defaultAttribute: 'defer',
      preload: {
        test: /\.js$/,
        chunks: 'initial',
      },
      prefetch: {
        test: /\.js$/,
        chunks: 'all',
      },
    }),
    // new CopyPlugin([
    //   {
    //     from: 'assets/**/*',
    //     to: DISTRIBUTION_ROOT,
    //     ignore: ['assets/styles/**/*'],
    //   },
    // ]),
    !prod && new webpack.HotModuleReplacementPlugin(),
    prod && new webpack.optimize.AggressiveSplittingPlugin(),
  ].filter(Boolean),
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    contentBase: DISTRIBUTION_ROOT,
    historyApiFallback: true,
    host: env.HOST_NAME,
    hot: true,
    inline: true,
    overlay: true,
    port: env.SITE_PORT,
  },
  devtool: prod ? 'hidden-source-map' : 'cheap-module-eval-source-map',
});
