import * as types from '../constants/ActionTypes';

let initialState = {
    list:[]
};

const Index = (state = initialState, action) => {
    switch (action.type) {
        case types.FIREBASE_GET_LIST:
            return {
                ...state,
                list: action.data.list
            };
        default:
            return state;
    };
};

export default Index;
