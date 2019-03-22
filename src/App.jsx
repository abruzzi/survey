import React from 'react';
import {Col, Row} from 'antd';

import styled from 'styled-components';
import connect from "react-redux/es/connect/connect";
import {link} from "./components/InputFields";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const InputField = ({field}) => {
  return link(field);
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