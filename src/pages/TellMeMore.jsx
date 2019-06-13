import {Col, Row, Button} from "antd";
import React from "react";
import connect from "react-redux/es/connect/connect";
import {createField} from "../components/inputFieldFactory";
import styled from "styled-components";
import {checkCompleteness} from "../states/selectors";

const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
  
  h2 {
    margin: 0;
    text-transform: uppercase;
  }
`;

const StyledRow = styled(Row)`
  padding: 20px 0;
`;

const InputField = ({field}) => {
  return createField(field);
};

const TellMeMore = ({survey, completed}) => (
  <Container>
    <h2>Tell me more</h2>
    <Row>
      {
        survey.map((s, index) => (
          <Col span={24} key={index}>
            <InputField field={s} />
          </Col>
        ))
      }
    </Row>
    <StyledRow>
      <Button type="primary" disabled={!completed}>Submit</Button>
    </StyledRow>
  </Container>
)

const mapStateToProps = (state) => ({
  survey: state.displaying,
  completed: checkCompleteness(state)
});

export default connect(mapStateToProps)(TellMeMore);