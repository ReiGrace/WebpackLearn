#创建项目步骤  
1. `npm init` 填写项目相关信息  

2. `npm install --save-dev webpack`  

3. 创建相关文件
* index.html --放在public文件夹中;
* Greeter.js-- 放在app文件夹中;
* main.js-- 放在app文件夹中;

4. webpack打包方式
 {extry file}出填写入口文件的路径，本文中就是上述main.js的路径，    
 {destination for bundled file}处填写打包文件的存放路径  
 填写路径的时候不用添加{}  
`webpack {entry file} {destination for bundled file}`

5. 通过创建`webpack.config.js`来配置使用webpack  
    `module.exports = {`  
        `entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件`  
        `output: {`  
            `path: __dirname + "/public",//打包后的文件存放的地方`  
            `filename: "bundle.js"//打包后输出文件的文件名`  
        `}`  
    `}`  
    之后可以直接在命令行使用`webpack`进行打包  

6. devtool选项	                    配置结果  
    `source-map`	                    在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的source map，但是它会减慢打包速度；  
    `cheap-module-source-map`	        在一个单独的文件中生成一个不带列映射的map，不带列映射提高了打包速度，但是也使得浏览器开发者工具只能对应到具体的行，不能                                      对应到具体的列  （符号），会对调试造成不便；  
    `eval-source-map`	                使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。这个选项可以在不影响构建速度的前提下生成完整的                                           sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。在开发阶段这是一个非常好的选项，在生产阶段则一定不要启用                                     这个选项；  
    `cheap-module-eval-source-map`	    这是在打包文件时最快的生成source map的方法，生成的Source Map 会和打包后的JavaScript文件同行显示，没有列映射，和                                           eval-source-map选项具有相似的缺点；
7. 使用webpack构建本地服务器
`npm install --save-dev webpack-dev-server`   
    `devServer: {  `        
        `contentBase: "./public",//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）  `        
        `historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html  `       
        `inline: true//设置为true，当源文件改变时会自动刷新页面  `        
        `port: 8080//设置默认监听端口，如果省略，默认为”8080“`   
    `}`  
定义代码`"server": "webpack-dev-server --open"`  

8. 配置loader  
配置loader有两种方式  
* test：一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）  
* loader：loader的名称（必须）  
* include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；  
* query：为loaders提供额外的设置选项（可选）  

`rules: [  
            {  
                test: /(\.jsx|\.js)$/,  
                use: {  
                    loader: 'babel-loader',  
                    options: {  
                        presets: [  
                            'env', 'react'  
                        ]  
                    },  
                    exclude: /node_modules/  
                }  
            }  
        ]  `  

` loaders: [  
             {  
                 test: /\.jsx?$/,  
                 loader: 'babel-loader',  
                 query: {  
                     presets: ['es2015', 'react', 'stage-0']  
                 },  
                 exclude: /node_modules/  
             }  
]`  

9. 引入Babel解析react语法  
`npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react babel-preset-es2015 babel-preset-stage-0`  
引入后配置于loader

10. 安装react  
`npm install --save react react-dom`  

`Greeter.js`模块引入组件`import React, {Component} from 'react'`  

`main.js`入口引入  
`import React from 'react';`  
`import {render} from 'react-dom';`  

渲染 `render(<Greeter />, document.getElementById('root'));`  


#遇到的坑  
1. 创建项目时，`<script>`要写在index.html的body内，否则无法加载 
2. 使用命令行打包`webpack`需要安装`webpack-cli`