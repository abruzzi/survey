import * as types from '../constants';

export default (state={}, action) => {
  switch (action.type) {
    case types.ANSWER_QUESTION: {
      const {id, value} = action.payload;
      return {...state, [id]: value}
    }
    default:
      return state;
  }
}