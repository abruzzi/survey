import * as types from '../constants';

export const answer = (id, value) => ({
  type: types.ANSWER_QUESTION,
  payload: {
    id, value
  }
});