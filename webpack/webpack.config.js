const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000
    },
    entry: {
        main: './index.js'
    },
    context: path.resolve(__dirname, 'src'),
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin( {
            template: "./index.html"
        }),
        new CleanWebpackPlugin()
    ],
    module:{
        rules: [
            {
                test: /.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: ['file-loader']
            },
            {
                test: /.js$/i,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    }
}