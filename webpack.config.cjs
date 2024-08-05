const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// import path from 'path';
// import { fileURLToPath } from 'url';
// import nodeExternals from 'webpack-node-externals';
// import StartServerPlugin from 'start-server-webpack-plugin';
// import NodemonPlugin from 'nodemon-webpack-plugin';
// import webpack from 'webpack';
// import HtmlWebpackPlugin from 'html-webpack-plugin';

//const __dirname = path.dirname(fileURLToPath(import.meta.url));

module.exports = {
  entry: ['webpack/hot/poll?100', './src/server.js'],
  target: 'node',
  watch: true,
  mode: 'development',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
    clean: true,
    libraryTarget: 'commonjs',
  },
  externals: [
    nodeExternals({
      allowlist: ['webpack/hot/poll?100'],
    }),
  ],
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.wasm',
      '.node.ts',
      '.ts',
      '.node.tsx',
      '.tsx',
      '.mjs',
      '.node.js',
      '.json',
    ],
    symlinks: false,
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
    }),
    new NodemonPlugin({
      verbose: true,
      script: `src/server.js`,
      watch: 'build/server.js',
    }),
  ],
};
