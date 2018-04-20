import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

// Set redux-saga's middleWare function to a variable to use more easily
// with other functions
const sagaMiddleware = createSagaMiddleware();


// initialize the rootSaga function which will authenticate
// and initialize all children saga functions
sagaMiddleware.run(rootSaga);

// Wrapping the redux provider over our App so that it and all of it's child components will
// have access to redux and it's global redux state via it's store
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
