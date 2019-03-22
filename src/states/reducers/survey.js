import * as types from '../constants';

const initState = [
  {
    id: 'q1',
    type: 'text',
    question: 'What is your name?',
  },
  {
    id: 'q2',
    type: 'text',
    question: 'What is your address?',
  },
  {
    id: 'q3',
    type: 'radio',
    question: 'How are you?',
    answers: [
      { label: 'I am great', value: 'great'},
      { label: 'Not too bad', value: 'not-bad'}
    ]
  },
  {
    id: 'q4',
    type: 'text',
    question: 'What is your phone number?',
  },
];

const survey = (state = initState, action) => {
  switch (action.type) {
    case types.ANSWER_QUESTION:
      return state;
    default:
      return state;
  }
};

export default survey;