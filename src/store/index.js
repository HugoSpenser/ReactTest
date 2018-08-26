import rootReducer from '../reducers'
import createStore from "redux/src/createStore";
import {applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import {createLogger} from "redux-logger";

const defaultState = {
    simpletable: {counters: [0, 0, 0],},
    stork: {
        TESTS: {
            isFetching: true, list: [],
        },
        CTS: {
            isFetching: true, list: [],
        },
        TEMPLATES: {
            isFetching: true, list: [],
        }
    }
};

const loggerMiddleware = createLogger();

//export const store = createStore(rootReducer, defaultState);
export const store = createStore(rootReducer, defaultState, applyMiddleware(thunkMiddleware, loggerMiddleware));