// function greeter() {
//     var greet = document.createElement('div');
//     greet.textContent = 'Hi ycr !';
//     return greet;
// }

// module.exports = greeter;

//未更新react语法前
// var config = require('./config.json');

// module.exports = function () {
//     var greet = document.createElement('div');
//     greet.textContent = config.greetText;
//     return greet;
// };

//更新react语法后
import React, { Component } from 'react';
import config from './config';
// import styles from './Greeter.css';

require('./Greeter.css');

class Message extends Component {
    render() {
        return (
            //使用cssModule添加类名的方法
            <div className={'root'} >
                <p>this is message</p>
            </div>
        )
    }
}
export default Message;