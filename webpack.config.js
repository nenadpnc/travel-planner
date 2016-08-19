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
        },
        {
            test: /\.(png|jpg|jpeg|ttf|eot|woff|svg|gif)$/,
            exclude: /node_modules/,
            loader: 'url-loader?limit=20000&name=assets/[name].[ext]'
        }
      ]
    },
    plugins: [
        new ExtractTextPlugin('/style/styles.css')
    ]
};