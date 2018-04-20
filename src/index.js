import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

// Set redux-saga's middleWare function to a variable to use more easily
// with other functions
const sagaMiddleware = createSagaMiddleware();

// rootSaga will be the hub and initializing of all Saga functions.
// Any dispatch call will look here first. If it's not a saga, it will
// be a reducer function and go there instead.
function* rootSaga() {
    console.log('rootSaga Loaded');
}// end rootSaga

// reducer responsible for the state of newReflection page
const newReflection = (state={}, action) => {
    console.log('newReflection loaded')
    return state
}


// storeInstance will be the only instance of reduxState in this project.
// This is where we can reduxState what reducers it will be in control of
// and what middleware it will be using.
const storeInstance = createStore(
    // store can only run one reducer at a time, so combineReducers is used to tell
    // redux store that it will be handling more than one reducer by putting them all
    // in an object
    combineReducers({
        newReflection
    }),
    applyMiddleware(sagaMiddleware, logger)
) // end storeInstance


// initialize the rootSaga function which will authenticate
// and initialize all children saga functions
sagaMiddleware.run(rootSaga);

// Wrapping the redux provider over our App so that it and all of it's child components will
// have access to redux and it's global redux state via it's store
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
