import React from 'react';
import {Col, Row} from 'antd';

import styled from 'styled-components';
import TextField from "./components/TextField";
import QuestionAndAnswers from "./components/QuestionAndAnswers";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const App = () => {
  const qna = {
    question: 'How are you?',
    answers: [
      { label: 'I am great', value: 'great'},
      { label: 'Not too bad', value: 'not-bad'}
    ]
  };

  return (<Container>
    <Row>
      <Col span={24}>
        <TextField label="Name" placeholder="Type your name here"/>
      </Col>

      <Col span={24}>
        <TextField label="Address" placeholder="And you live in"/>
      </Col>

      <Col span={24}>
        <QuestionAndAnswers
          question={qna.question}
          answers={qna.answers}
          onChange={() => {}}
        />
      </Col>
    </Row>
  </Container>);
};

export default App;