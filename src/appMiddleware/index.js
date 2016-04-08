import 'es6-promise';
import 'isomorphic-fetch';
import Firebase from 'firebase';

const firebaseRef = new Firebase('https://complex-react.firebaseio.com');

export default function appMiddleware () {
    return next => action => {
        const { fetchAPI, types } = action;
        if (!fetchAPI) {
            return next(action);
        }
        const [ success, failure ] = types;
        const childRef = firebaseRef.child(fetchAPI.child);
        switch (fetchAPI.method) {
            case 'init':
                childRef.on('value', (snapshot) => {
                    next(success(snapshot.val()));
                }, (error) => {
                    next(failure(error.code));
                });
                break;
            case 'off':
                console.log('off');
                firebaseRef.off('value', () => {
                    next(success());
                }, (error) => {
                    next(failure(error.code));
                });
                break;
        }
    };
}