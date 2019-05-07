import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from '../reducers/index';
import thunk from "redux-thunk";

import survey from './survey.json';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialStore = {
  displaying: [survey[0]]
};

const index = createStore(rootReducer, initialStore, composeEnhancers(applyMiddleware(thunk)));

export default index;