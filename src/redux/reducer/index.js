// You must add this reducer to your store for syncing to work.
// A reducer function that stores location updates from history. If you use combineReducers, it should be nested under the routing key.
// 暂不使用
// import { routerReducer as routing } from 'react-router-redux'

import { combineReducers } from 'redux';
import * as ycrReducer from './ycrreducer';

const rootReducer = combineReducers({
    // routing,
    config: (state = {}) => state,
    ...ycrReducer
});

export default rootReducer;