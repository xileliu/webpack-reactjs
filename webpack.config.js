var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      redpacket: path.resolve(__dirname, 'app/main.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["es2015", "stage-0", "react"]
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    "style",
                    "css!sass")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css",{
            chunks:["redpacket"]
        }),
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './app/view/index.html',
        }),
        new HtmlWebpackPlugin({
          filename: 'accordion.html',
          template: './app/view/accordion.html',
        }),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    }
};
