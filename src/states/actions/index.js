import * as types from '../constants';

export const answer = (id, value, answers) => ({
  type: types.ANSWER_QUESTION,
  payload: {
    id, value, answers
  }
});

export const addExperience = () => ({
  type: types.ADD_EXPERIENCE
});

export const updateField = (id, field, value) => ({
  type: types.UPDATE_EXPERIENCE,
  payload: {
    id, field, value
  }
});

export const removeItem = (id) => ({
  type: types.REMOVE_EXPERIENCE,
  payload: {
    id
  }
});