import fetch from 'isomorphic-fetch';


export const TEST_REDUCER = 'TEST_REDUCER';

const getDataSuccess = (json, success, type) => {
    return {
        json,
        success,
        type: type
    }
}

//test
export const testReducer = (json) => {
    return {
        type: TEST_REDUCER,
        json
    }
}