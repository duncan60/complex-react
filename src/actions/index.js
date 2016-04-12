import * as types from 'constants/ActionTypes';

let getFirebaseList = (data) => {
    return {
        type: types.FIREBASE_GET_LIST,
        data
    };
};
let friebaseError = (error) => {
    return {
        type: types.FIREBASE_ERROR,
        error
    };
};
let offFirebase = () => {
    return {
        type: types.FIREBASE_OFF
    };
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