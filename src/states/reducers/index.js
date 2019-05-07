import { combineReducers } from 'redux';

import app from './app';
import displaying from './displaying'

export default combineReducers({
  app,
  displaying
});