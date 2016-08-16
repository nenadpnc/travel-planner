var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./public/js/app",
    output: {
        path: __dirname + "/public/dist",
        filename: "/js/bundle.js"
    },
    resolve: {
      extensions: ['', '.jsx', '.js', '.json', '.less'],
      alias: {
        'react': 'preact-compat',
        'react-dom': 'preact-compat'
      }
    },
    module: {
      preLoaders: [
        {
          test: /\.jsx?$/,
          exclude: /src\//,
          loader: 'source-map'
        }
      ],
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel'
        },
        {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract('css!less')
        }
      ]
    },
    plugins: [
        new ExtractTextPlugin('/style/styles.css')
    ]
};