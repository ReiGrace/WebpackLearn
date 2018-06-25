import {
    TEST_REDUCER
} from '../action/ycraction'


export const testReducer = (state = 0, action = {}) => {
    switch (action.type) {
        case TEST_REDUCER:
            return state + 1;
        default:
            return state;
    }
} 
