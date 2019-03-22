import React from 'react';
import {Col, Row} from 'antd';

import styled from 'styled-components';
import TextField from "./components/TextField";
import QuestionAndAnswers from "./components/QuestionAndAnswers";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const survey = [
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
  }
];

const InputField = ({field}) => {
  const inputFieldMap = {
    text: (question) => (<TextField label={question.question} placeholder={question.question} />),
    radio: (question) => (<QuestionAndAnswers question={question.question} answers={question.answers} onChange={() => {}}/>)
  };

  return inputFieldMap[field.type](field);
};

const App = () => {
  return (<Container>
    <Row>
      {
        survey.map((s, index) => (
          <Col span={24} key={index}>
            <InputField field={s} />
          </Col>
        ))
      }
    </Row>
  </Container>);
};

export default App;