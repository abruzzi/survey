import * as types from "../constants";
import _ from 'lodash';
import survey from '../store/survey.json';

const questionById = id => _.find(survey, s => s.id === id);

const next = (id, value) => {
  const current = _.find(survey, s => s.id === id);

  switch(current.type) {
    case 'text': {
      return current.next;
    }
    case 'radio': {
      return (current.answers.find(a => a.value === value) || {}).next;
    }
    case 'dropdown': {
      return (current.options.find(a => a.value === value) || {}).next;
    }
  }
};

const nextIds = (id, value) => {
  const ids = [];

  const nextId = next(id, value);

  if(nextId) {
    ids.push(nextId);
  }

  return ids;
};

const questions = ids => ids.map(questionById);
const toIds = questions => questions.map(q => q.id);

const displaying = (state = [], action) => {
  switch (action.type) {
    case types.ANSWER_QUESTION: {
      const {id, value, answers} = action.payload;

      const ids = toIds(state);

      const index = ids.findIndex(x => x === id);
      const base = _.dropRight(ids, ids.slice(index).length-1);

      const additional = nextIds(id, value, answers);
      return questions(base.concat(additional));
    }
    default:
      return state;
  }
};

export default displaying;