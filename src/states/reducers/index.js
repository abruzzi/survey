import { combineReducers } from 'redux';
import survey from './survey';
import answers from './answers';

export default combineReducers({
  survey,
  answers
});