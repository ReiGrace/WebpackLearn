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

class Greeter extends Component {
    render() {
        return (
            <div>
                {config.greetText}
            </div>
        )
    }
}

export default Greeter;