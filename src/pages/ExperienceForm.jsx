import React from "react";
import {Row, Col, Button} from 'antd';
import TextField from "../components/field/TextField";
import styled from "styled-components";

const StyledRow = styled(Row)`
  padding: 20px 0;
`;

class HistoryItem extends React.Component {
  updateField = () => {}

  render () {
    const {name, period, stack} = this.props;

    return (<StyledRow gutter={16}  type="flex" justify="center" align="middle">
      <Col span={6}>
        <TextField value={name} onChange={this.updateField} placeholder="Last First" />
      </Col>
      <Col span={6}>
        <TextField value={period} onChange={this.updateField} placeholder="10 months" />
      </Col>
      <Col span={6}>
        <TextField value={stack} onChange={this.updateField} placeholder="JavaScript" />
      </Col>
      <Col span={6}>
        <Button type="danger" shape="circle" icon="delete" />
      </Col>
    </StyledRow>)
  }
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    padding-top: 20px;
    text-transform: uppercase;
  }
`;

const History = () => {
  return (<Container>
    {[
      {name: 'ABC', period: '10 months', stack: 'JavaScript'}
    ].map(history => <HistoryItem {...history} />)}
    <Row>
      <Button type="primary">Add more</Button>
    </Row>
  </Container>);
}

export default History;

