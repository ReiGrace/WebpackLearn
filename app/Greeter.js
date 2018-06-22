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
import Loadable from 'react-loadable';
// import styles from './Greeter.css';
import MyLoadable from './MyLoadable';

require('./Greeter.css');

class Greeter extends Component {
    render() {
        return (
            //使用cssModule添加类名的方法
            <div className={'root'} >
                {config.greetText}
            </div>
        )
    }
}

const LoadableBar = Loadable({
    loader: () => import('./another-component.js'),
    // loading() {
    //     return <div>Loading...</div>
    // }
    loading: Loading,
    delay: 300, //延迟加载loading内容
});

function Loading(props) {
    if (props.error) {
        return <div>Error! <button onClick={props.retry}>Retry</button></div>;
    } else if (props.timedOut) {
        return <div>Taking a long time... <button onClick={props.retry}>Retry</button></div>;
    } else if (props.pastDelay) {
        return <div>Loading...</div>;
    } else {
        return null;
    }
}

//封装以后
const LoadableMyComponent = MyLoadable({
    loader: () => import('./another-component'),
    //wrapped Loadable breaks react-loadable/babel
    modules: ['./another-component'],
    webpack: () => [require.resolveWeak('./another-component')],
});


class MyComponent extends Component {
    render() {
        return <LoadableMyComponent />;
    }
}
export default MyComponent;