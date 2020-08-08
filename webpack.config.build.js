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
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },
      // for css module
      {
        test: /\.module\.scss$/,

        loader: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ],
});
