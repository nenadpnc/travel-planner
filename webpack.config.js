var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var APP_DIR = path.resolve(__dirname, './public/js/');
var BUILD_DIR = path.resolve(__dirname, './public/dist/');
module.exports = {
    context: APP_DIR,
    entry: './main.jsx',
    output: {
        path: BUILD_DIR,
        filename: "js/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel'
            },
            {
                test: /\.(css|less|scss)$/,
                loader: ExtractTextPlugin.extract('css!less!sass')
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