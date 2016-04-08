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
let offFirebase = () => {
};

export function firebeaseInitConnect() {
    return {
        types   : [ getFirebaseList, friebaseError ],
        fetchAPI: {
            method: 'init',
            child : '/'
        }
    };
};

export function firebaseOffConnect() {
    return {
        types   : [ offFirebase, friebaseError ],
        fetchAPI: {
            method: 'off',
            child : '/'
        }
    };
};