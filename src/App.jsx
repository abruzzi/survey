import React from 'react';
import { Row, Col } from 'antd';

import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const App = () => {
  return (<Container>
    <Row>
      <Col span={24}>
        Hello world
      </Col>
    </Row>
  </Container>);
};

export default App;