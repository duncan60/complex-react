import * as types from 'constants/ActionTypes';

let getFirebaseList = (list) => {
    return {
        type: types.FIREBASE_GET_LIST,
        list
    };
};
let friebaseError = (error) => {
    return {
        type: types.FIREBASE_ERROR,
        error
    };
};
export function firebeaseInitConnect() {
    return {
        types   : [getFirebaseList, friebaseError],
        fetchAPI: {
            method: 'init',
            child : '/'
        }
    };
};