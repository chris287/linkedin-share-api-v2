const { truncate } = require('fs');
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: path.join(__dirname,"js","app.js"),
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.(gif|svg|jpg|png)$/,
                loader: "file-loader",
            }
        ]
    },
    resolve: {
        extensions: ['*','.js','.jsx','.css']
    },
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        historyApiFallback: truncate
    },
};