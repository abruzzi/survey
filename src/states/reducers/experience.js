import _ from 'lodash';
import * as types from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_EXPERIENCE: {
      return [...state, {id: _.uniqueId('expr_')}]
    }
    case types.UPDATE_EXPERIENCE: {
      const copy = state.slice();
      const expr = copy.find(e => e.id === action.payload.id);
      expr[action.payload.field] = action.payload.value;
      return copy;
    }
    case types.REMOVE_EXPERIENCE: {
      const copy = state.slice();
      _.remove(copy, x => x.id === action.payload.id);
      return copy;
    }
    default:
      return state;
  }
}