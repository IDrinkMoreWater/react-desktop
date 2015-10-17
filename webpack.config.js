var webpack = require("webpack");

module.exports = {
  entry: './src/App.js',

  output: {
    path: '.',
    filename: './build/bundle.js',
    publicPath: '/react-desktop/',
    libraryTarget: "var"
  },

  devServer: {
    contentBase: './'
  },

  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader?stage=0'
      },
      {
        test: /\.scss|\.css$/,
        loaders: [
          'style',
          'css',
          'sass'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2)$/,
        loader: 'url?limit=10000&name=[path][name].[ext]'
      },
      {
        test: /\.(eot|ttf)$/,
        loader: 'file'
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline'
      }
    ]
  }
};
