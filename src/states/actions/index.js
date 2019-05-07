import * as types from '../constants';

export const answer = (id, value, answers) => ({
  type: types.ANSWER_QUESTION,
  payload: {
    id, value, answers
  }
});