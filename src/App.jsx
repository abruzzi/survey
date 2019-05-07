import React from 'react';
import {Col, Row} from 'antd';

import styled from 'styled-components';
import connect from "react-redux/es/connect/connect";
import {createField} from "./components/inputFieldFactory";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    padding-top: 20px;
    text-transform: uppercase;
  }
`;

const InputField = ({field}) => {
  return createField(field);
};

const App = ({survey}) => {
  return (<Container>
    <Row>
      <h2>Tell me more</h2>
    </Row>
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
  survey: state.displaying
});

export default connect(mapStateToProps)(App);