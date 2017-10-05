import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reducers from './reducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

const createStoreWithMiddleware = applyMiddleware()(createStore);

let store = createStore(reducers);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.getElementById('root'));

