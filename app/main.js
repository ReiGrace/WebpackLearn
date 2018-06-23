//未更新react语法前
// const greeter = require('./Greeter.js');

// document.querySelector("#root").appendChild(greeter());

//更新react语法后
import React from 'react';
import { render } from 'react-dom';
import Greeter from './Greeter';
import App from './app';

require('./main.css'); //使用require导入css文件

// render(<Greeter />, document.querySelector('#root'));


render(<App />, document.querySelector('#root'));