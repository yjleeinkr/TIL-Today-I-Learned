const path = require('path')
const webpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    app: ['./src/index']
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['last 2 chrome versions', '> 5% in KR']
            },
            debug: true,
          }],
          '@babel/preset-react'
        ],
        plugins: [
          'react-refresh/babel'
        ]
      }
    }, {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }]
  }, plugins: [
    new webpackPlugin(),
    new MiniCssExtractPlugin({ filename: 'style.css' })
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 4000,
    hot: true,
    historyApiFallback: true,
  }
}