import _ from 'lodash';
import { createSelector } from 'reselect'

const displaying = state => state.displaying;
const answersSelector = state => state.app.answers;

export const checkCompleteness = createSelector(
  [displaying, answersSelector], (displaying, answers) => {
    return _.every(displaying, q => answers[q.id])
  }
);

const experienceSelector = state => state.experience;

export const deletableSelector = createSelector(
  [experienceSelector], experience => experience.length > 1
);