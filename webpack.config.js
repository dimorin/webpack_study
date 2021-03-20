const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "none",
    entry: {
        index:'./src/index.js',
        about:'./src/about.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public'), //__dirname : 현재 webpack.config.js가 위치하고 있는 경로를 알려주는 변수
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'./index.html',
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            template:'./src/about.html',
            filename:'./about.html',
            chunks:['about']
        })
    ],
};