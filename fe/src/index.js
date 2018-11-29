import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';

import { Provider } from 'react-redux';

import messageReducer from './reducers/messageReducer';

const store = createStore(messageReducer);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));
