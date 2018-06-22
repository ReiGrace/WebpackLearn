# 创建项目步骤（webpack 4.x）  
1. `npm init` 填写项目相关信息  

2. `npm install --save-dev webpack webpack-cli`  
webpack及webpack命令行工具

3. 创建相关文件
* index.html --放在public文件夹中;
* Greeter.js-- 放在app文件夹中;
* main.js-- 放在app文件夹中;

4. webpack打包方式
 {extry file}出填写入口文件的路径，本文中就是上述main.js的路径，    
 {destination for bundled file}处填写打包文件的存放路径  
 填写路径的时候不用添加{}  
 最新需要指定输出 -o  
`webpack {entry file} -o {destination for bundled file}`

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
                }  
                exclude: /node_modules/  
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

* jshint-loader
检查js是否符合jshint的规范
`npm install jshint-loader --save-dev`  

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

11. CSS  
`npm install --save-dev style-loader css-loader`  
`css-loader`使你能够使用类似`@import` 和 `url(...)`的方法实现 `require()`的功能,`style-loader`将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中  

12. CSS module  
被称为`CSS modules`的技术意在把JS的模块化思想带入CSS中来，通过CSS模块，所有的类名，动画名默认都只作用于当前模块  
`options: {
            modules: true, // 指定启用css modules
            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
        }`  

13. CSS预处理器  
`Sass` 和 `Less` 之类的预处理器是对原生CSS的拓展，它们允许你使用类似于`variables`, `nesting`, `mixins`, `inheritance`等不存在于CSS中的特性来写CSS，CSS预处理器可以这些特殊类型的语句转化为浏览器可识别的CSS语句  

* Less Loader  
* Sass Loader  
* Stylus Loader  

在webpack配置文件中添加`postcss-loader`，在根目录新建`postcss.config.js`,并添加如下代码之后，重新使用npm build打包时，你写的css会自动根据Can i use里的数据添加不同前缀了  
`//webpack.config.js`  
`loader: "postcss-loader"`  

`// postcss.config.js`  
`module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}`  

14. 插件（Plugins）  
插件（Plugins）是用来拓展Webpack功能的，它们会在整个构建过程中生效，执行相关的任务  
Loaders和Plugins常常被弄混，但是他们其实是完全不同的东西，可以这么来说，loaders是在打包构建过程中用来处理源文件的（JSX，Scss，Less..），一次处理一个，插件并不直接操作单个文件，它直接对整个构建过程其作用。  

要使用某个插件，我们需要通过npm安装它，然后要做的就是在webpack配置中的plugins关键字部分添加该插件的一个实例（plugins是一个数组）  

webpack的处理顺序是perLoaders - loaders - postLoaders   

15. 其它优化插件  
* Hot Module Replacement  
允许你在修改组件代码后，自动刷新实时预览修改后的效果，需要配合`react-transform-hrm`使用  

* OccurenceOrderPlugin  
为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID  (内置插件)  

* UglifyJsPlugin  
压缩JS代码  (内置插件)  

16. 去除build文件中的残余文件  
添加了hash之后，会导致改变文件内容后重新打包时，文件名不同而内容越来越多，清理插件`clean-webpack-plugin`  
`cnpm install clean-webpack-plugin --save-dev`

`new CleanWebpackPlugin('build/*.*', {
      root: __dirname,
      verbose: true,
      dry: false
  })`  

## 项目用到的插件

* HtmlWebpackPlugin  
`npm install --save-dev html-webpack-plugin`  

这个插件的作用是依据一个简单的index.html模板，生成一个自动引用你打包后的JS文件的新index.html。这在每次生成的js文件名称不同时非常有用（比如添加了hash值）  
- 移除public文件夹，利用此插件，index.html文件会自动生成，此外CSS已经通过前面的操作打包到JS中了  
- 在app目录下，创建一个index.tmpl.html文件模板，这个模板包含title等必须元素，在编译过程中，插件会依据此模板生成最终的html页面，会自动添加所依赖的 css, js，favicon等文件 
- 更新webpack的配置文件，方法同上,新建一个build文件夹用来存放最终的输出文件 

* ExtractTextPlugin  
分离CSS和JS文件  
`npm install --save-dev extract-text-webpack-plugin`  

* ProvidePlugin  
自动加载模块，而不必到处 `import` 或 `require`  

* CopyWebpackPlugin  
将单个文件或整个目录复制到构建目录  
`npm install --save-dev copy-webpack-plugin`  

* DefinePlugin
允许创建一个在编译时可以配置的全局常量 

# 遇到的坑  
1. 创建项目时，`<script>`要写在index.html的body内，否则无法加载 

2. 使用命令行打包`webpack`需要安装`webpack-cli`

3. `webpack.config.js`内加入module时，需注意配置格式

4. `babel`的`options`可以在`webpack.config.js`完成，如果配置较多，新建`.babelrc`,在文件内进行配置。  

5. `extract-text-webpack-plugin`3.x版本不支持webpack 4.x版本，需要更新至->4.x版本，更新之后，`clean-webpack-plugin`无法使用

6. webpack 4以上移除大量插件，可在`optimization`中配置

7. 分离第三方库，可以在entry加入需要分离的库，然后在`extract-text-webpack-plugin`的`chunks`中提取，`chunks: ['app', 'commons', 'vendors']`，对应entry  

8. 分离第三方库目前也可以在`splitChunks`中进行，目前没有明确的标准

9. 打包出现0kb的`css`文件是由于`extract-text-webpack-plugin`处于beta阶段

# 参考文档
* [webpack+react项目初始](https://segmentfault.com/a/1190000008257732)  
* [README文档规范](https://www.cnblogs.com/zachary93/p/6106829.html)  
* [webpack官网](https://webpack.js.org/)
* [babel入门](https://blog.csdn.net/ai52011/article/details/76580988)  
* [Webpack4 不深不浅的实践教程](https://segmentfault.com/a/1190000014466696#articleHeader8)
* [optimization.splitChunks](https://webpack.js.org/plugins/split-chunks-plugin/#optimization-splitchunks)
* [optimization.splitChunks中文](https://blog.csdn.net/songluyi/article/details/79419118)
* [记一次webpack3升级webpack4的踩坑](https://www.cnblogs.com/carrotWu/p/8665720.html)