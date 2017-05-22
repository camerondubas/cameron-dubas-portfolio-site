var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var OfflinePlugin = require('offline-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    bundle: "./src/index.js",
    vendor: ['hyperapp', 'hyperx']
  },
  plugins: [
    new HtmlWebpackPlugin({template: __dirname + "/src/index.html"}),
    new CleanWebpackPlugin(['dist'], {
      verbose: true,
      dry: false
    }),
    new CopyWebpackPlugin([{ from: 'static' }]),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[hash].js'
    }),
    new ExtractTextPlugin("[name].[hash].css"),
    new OfflinePlugin({
      externals: ['/index.html'],
      ServiceWorker: {
        events: true,
        navigateFallbackURL: '/',
        cacheName: 'cam-cache',
        minify: false
      },
      AppCache: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|dist)/,
        loader: "babel-loader!eslint-loader!transform-loader?hyperxify",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /node_modules/,
        use: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '60-80',
                speed: 3,
              },
            }
          }
        ]
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].[hash].js",
    publicPath: "/"
  }
}
