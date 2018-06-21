const path = require('path');

module.exports = {
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    //开发用，配置资源映射，打包速度从左到右加快，source-map，cheap-module-source-map，eval-source-map，cheap-module-eval-source-map
    // devtool: 'eval-source-map',

    devServer: {
        contentBase: './public',//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        host: '127.0.0.1',
        port: 30001
    },

    module: {
        // rules: [
        //     {
        //         test: /(\.jsx|\.js)$/,
        //         use: {
        //             loader: 'babel-loader',
        //             options: {
        //                 presets: [
        //                     'env', 'react'
        //                 ]
        //             },
        //             exclude: /node_modules/
        //         }
        //     }
        // ]
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                },
                exclude: /node_modules/
            }
        ]
    },

    //模式配置，development，production，none
    mode: 'none'
}