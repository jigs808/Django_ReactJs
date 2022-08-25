import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import compose, { applyMiddleware, createStore } from 'redux';
import reducer from './store/reducers/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
  
const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhances(
  applyMiddleware(thunk)
));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
