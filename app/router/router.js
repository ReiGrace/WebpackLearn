import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Main from '../main';
import Message from '../message';

<Router history={hashHistory}>
    <Route path="/" component={Main}>
        <Route path="/message" component={Message} />
    </Route>
</Router>

export default React.createClass({
    render() {
        return <div>
            {this.props.children}
        </div>
    }
})