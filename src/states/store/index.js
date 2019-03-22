import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const initialStore = {};

const index = createStore(rootReducer, initialStore);

export default index;