const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CleanWebpackPlugin  = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry: __dirname + '/app/main.js',
    //需要分离第三方库的时候使用
    // entry: {
    //     index: __dirname + '/app/main.js',
    //     vendors: ['react', 'react-dom'],
    // },
    output: {
        // path: __dirname + '/public',
        path: path.resolve(__dirname, 'public'),
        // filename: 'bundle-[hash].js' 
        filename: 'bundle-[name].js',
    },
    //开发用，配置资源映射，打包速度从左到右加快，source-map，cheap-module-source-map，eval-source-map，cheap-module-eval-source-map
    // devtool: 'eval-source-map',

    devServer: {
        contentBase: './public',//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot: true,
        host: '127.0.0.1',
        port: 30001
    },

    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'es2015', 'react', 'stage-0'
                        ]
                    },
                },
                exclude: /node_modules/
            },
            {
                test: /\.css|less$/,
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'less-loader'] })
                // use: [
                //     {
                //         loader: 'style-loader'
                //     }, {
                //         loader: 'css-loader',
                //         options: {
                //             modules: true, // 指定启用css modules
                //             // localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                //         },
                //     }, {
                //         loader: 'less-loader',
                //     }
                // ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html',//new 一个这个插件的实例，并传入相关的参数
            filename: 'index.html',
            minify: {                                    // 压缩 HTML 文件
                removeComments: true,                    // 移除 HTML 中的注释
                collapseWhitespace: false                 // 删除空白符与换行符
            },
            //需要分离第三方库的时候使用
            // chunks: ['app', 'commons', 'vendors']
        }),
        // new CleanWebpackPlugin('public/*.*', {
        //     root: __dirname,
        //     verbose: true,
        //     dry: false,
        //     exclude: ['index-del.html', 'bundle.js']
        // }),
        new ExtractTextPlugin('[name].css'),
        // new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ManifestPlugin(),
    ],

    optimization: {
        splitChunks: {
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                //打包第三方类库
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    priority: 10,
                },
                //打包重复出现的代码
                vendors: {
                    // test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'initial',
                    maxInitialRequests: 5, // The default limit is too small to showcase the effect
                    minSize: 0, // This is example is too small to create commons chunks
                    minChunks: 2,
                },
                'async-vendors': {
                    name: 'async-vendors',
                    chunks: 'async',
                    test: /[\\/]node_modules[\\/]/,
                    minChunks: 2,
                },
                styles: {
                    name: 'styles',
                    test: /\.(css|less)$/,
                    chunks: 'all',
                    minChunks: 2,
                    enforce: true
                },
            }
        }
    },

    //模式配置，development，production，none
    // mode: 'development'
}