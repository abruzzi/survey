import { combineReducers } from 'redux';

import app from './app';
import displaying from './displaying'
import experience from './experience';

export default combineReducers({
  app,
  displaying,
  experience
});