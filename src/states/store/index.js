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
        {label: 'I am great', value: 'great'},
        {label: 'Not too bad', value: 'not-bad'}
      ]
    },
    {
      id: 'q4',
      type: 'text',
      question: 'What is your phone number?',
    },
    {
      id: 'q5',
      type: 'radio',
      question: 'Do you work',
      answers: [
        {label: 'Yes, I am currently employed', value: 'employed'},
        {label: 'No', value: 'no'}
      ]
    },
    {
      id: 'q6',
      type: 'dropdown',
      question: 'How old are you?',
      options: [
        {label: '1', value: '1'},
        {label: '2', value: '2'}
      ]
    }
  ]
};

const index = createStore(rootReducer, initialStore, composeEnhancers(applyMiddleware(thunk)));

export default index;