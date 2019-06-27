/**
 * @author: Guillaume Nachury 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//loading up design system
import 'antd/dist/antd.css';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import AsyncDispatchMiddleware from './middlewares';

import AppStore from './reducers';

const middlewares = [AsyncDispatchMiddleware];
const store = createStore(AppStore, applyMiddleware(...middlewares));

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
