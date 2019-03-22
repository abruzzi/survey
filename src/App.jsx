import React from 'react';
import {Col, Row} from 'antd';

import styled from 'styled-components';
import TextField from "./components/TextField";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const App = () => {
  return (<Container>
    <Row>
      <Col span={24}>
        <TextField label="Name" placeholder="Type your name here"/>
      </Col>

      <Col span={24}>
        <TextField label="Address" placeholder="And you live in"/>
      </Col>
    </Row>
  </Container>);
};

export default App;