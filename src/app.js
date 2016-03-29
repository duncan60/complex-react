import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from 'reducers';
import appMiddleware from 'appMiddleware';

import { Root, Home } from 'components/page';

const finalCreateStore = compose(
    applyMiddleware(appMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = finalCreateStore(rootReducer);

const routes = (
    <Route component={Root}>
        <Route path="/" component={Home} />
    </Route>
);

render(
    <Provider store={store}>
        <Router history={browserHistory} queryKey={false}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
);
