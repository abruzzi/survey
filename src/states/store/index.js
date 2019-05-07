import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from '../reducers/index';
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialStore = {
  survey: [
    {
      id: 'q1',
      type: 'text',
      question: 'What is your name?',
      next: 'q2',
    },
    {
      id: 'q2',
      type: 'radio',
      question: 'Are you a PS?',
      answers: [
        {label: 'Yes', value: 'yes', next: 'q3'},
        {label: 'No', value: 'no', next: undefined}
      ]
    },
    {
      id: 'q3',
      type: 'radio',
      question: 'What is your role?',
      answers: [
        {label: 'PM', value: 'pm', next: undefined},
        {label: 'BA', value: 'ba', next: undefined},
        {label: 'QA', value: 'qa', next: 'q4'},
        {label: 'Dev', value: 'dev', next: 'q5'},
      ]
    },
    {
      id: 'q4',
      type: 'dropdown',
      question: 'What is your favorite automation tool',
      options: [
        {label: 'Selenium', value: 'selenium', next: undefined},
        {label: 'Cypress', value: 'cypress', next: undefined}
      ]
    },
    {
      id: 'q5',
      type: 'radio',
      question: 'What is your field?',
      answers: [
        {label: 'Frontend ', value: 'frontend', next: 'q6'},
        {label: 'Backend', value: 'backend', next: 'q7'}
      ]
    },
    {
      id: 'q6',
      type: 'dropdown',
      question: 'Your favorite framework / library',
      options: [
        {label: 'React', value: 'react', next: undefined},
        {label: 'Angular', value: 'angular', next: undefined},
        {label: 'Other', value: 'other', next: undefined}
      ]
    },
    {
      id: 'q7',
      type: 'dropdown',
      question: 'Your favorite framework / library',
      options: [
        {label: 'Spring', value: 'spring', next: undefined},
        {label: 'Akka', value: 'akka', next: undefined},
        {label: 'RoR', value: 'ror', next: undefined},
        {label: 'other', value: 'other', next: undefined}
      ]
    }
  ]
};

const index = createStore(rootReducer, initialStore, composeEnhancers(applyMiddleware(thunk)));

export default index;