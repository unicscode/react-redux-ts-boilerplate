const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');

const base = require('./webpack.config.base');

module.exports = merge(base, {
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        exclude: /\.module\.(css|scss)$/,
        loader: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      // for css module
      {
        test: /\.module\.scss$/,

        loader: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    port: 3000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({}),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});
