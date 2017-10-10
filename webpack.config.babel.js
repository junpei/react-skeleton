'use strict'

import fs from 'fs'
import path from 'path'
import config from 'config'
import webpack from 'webpack'
import BrowserSyncPlugin from 'browser-sync-webpack-plugin'

const configFile = path.resolve(__dirname, config.buildFile)

fs.writeFileSync(configFile, JSON.stringify(config))

export default {
  resolve: {
    alias: {
      config: configFile
    },
    extensions: [
      '.js',
      '.jsx'
    ],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'lib')
    ]
  },
  entry: {
    'index': './src/index.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'public/javascripts'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        include: /config/
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin(config.browserSyncOptions) 
  ]
}
