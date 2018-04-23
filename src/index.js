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
    yield console.log('rootSaga Loaded');
    yield takeEvery('GET_REFLECTIONS', getReflectionsSaga); 
    yield takeEvery('POST_REFLECTION', postReflectionSaga);
    yield takeEvery('DELETE_REFLECTION', deleteReflectionSaga);
    yield takeEvery('UPDATE_REFLECTION', updateReflectionSaga);
}// end rootSaga

// Redux-Saga GET function to retrieve reflection data from server 
function* getReflectionsSaga(action) {
    try {
        // set the GET response from server to getReflectionsResponse for ease of use of data
        const getReflectionsResponse = yield call(axios.get, '/api/reflection');
        console.log('GET getReflectionsSaga response', getReflectionsResponse);
        // once back from server with data, activate viewReflections reducer to display reflections
        yield put(
            {
                type: 'DISPLAY_REFLECTIONS',
                payload: getReflectionsResponse.data
            }
        )
        // if there is an error
    } catch(error) {
        console.log('GET getReflectionsResponse ERROR', error);
        alert('Something went wrong!')
    } // end try and catch
} // end getReflection Saga

// Redux-Saga POST function to send user's new reflection data to server
function* postReflectionSaga(action){
    console.log('in postReflectionSaga with', action.payload)
    try {
        // axios POST route to server with action.payload of new reflection data
        yield call(axios.post, '/api/reflection', action.payload);
        // if successful, activate getReflectionSaga to retrieve updated data from database
        yield put({
            type: 'GET_REFLECTIONS'
        })
        // if there is an error
    } catch (error) {
        console.log('postReflectionSaga ERROR', error);
        alert('Oops! Something went wrong when trying to remember your reflection!')
    } // end try and catch
} // end postReflectionSaga

// Redux-Saga DELETE function to remove reflection from database
function* deleteReflectionSaga(action){
    try {
        // axios DELETE route to server with action.payload of reflection id
        yield call(axios.delete, `/api/reflection/${action.payload.id}`);
        // if successful, activate getReflectionSaga to retrieve updated data from database 
        yield put({
            type: 'GET_REFLECTIONS'
        })
        // if there is an error
    } catch(error) {
        console.log('deleteReflectionSaga ERROR', error);
        // alert user there was an error
        alert('Oops! Something went wrong trying to delete!');
    } // end try and catch
} // end deleteReflectionSaga

function* updateReflectionSaga(action){
    try {
        yield call(axios.put, `/api/reflection/${action.payload.id}`);
        yield put({
            type: 'GET_REFLECTIONS'
        })
    } catch(error) {
        console.log('updateReflectionSaga ERROR', error);
        alert('Oops! Something went wrong trying to bookmark'); // alert user there was an error
    } // end try and catch
} // end updateReflectionSaga

// reducer responsible for the state of ViewReflections page
// activated by getReflectionsSaga
// will display all of the reflection data on the DOM
const viewReflections = (state = [], action) => {
    switch (action.type){
        case 'DISPLAY_REFLECTIONS' :
            console.log('DISPLAY_REFLECTIONS', action.payload);
            return action.payload
        default : 
            return state
    } // end Switch
} // end viewReflections reducer


// storeInstance will be the only instance of reduxState in this project.
// This is where we can reduxState what reducers it will be in control of
// and what middleware it will be using.
const storeInstance = createStore(
    // store can only run one reducer at a time, so combineReducers is used to tell
    // redux store that it will be handling more than one reducer by putting them all
    // in an object
    combineReducers({
        viewReflections
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
