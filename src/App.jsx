import React from 'react';
import {Col, Row} from 'antd';

import styled from 'styled-components';
import TextField from "./components/TextField";
import QuestionAndAnswers from "./components/QuestionAndAnswers";
import connect from "react-redux/es/connect/connect";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const InputField = ({field}) => {
  const inputFieldMap = {
    text: (question) => (<TextField label={question.question} placeholder={question.question} />),
    radio: (question) => (<QuestionAndAnswers question={question.question} answers={question.answers} onChange={() => {}}/>)
  };

  return inputFieldMap[field.type](field);
};

const App = ({survey}) => {
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

const mapStateToProps = (state) => ({
  survey: state.survey
});

export default connect(mapStateToProps)(App);