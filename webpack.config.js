var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./public/js/app",
    output: {
        path: __dirname + "/public/dist",
        filename: "/js/bundle.js"
    },
    module: {
      loaders: [
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