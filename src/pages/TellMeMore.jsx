import {Col, Row, Button} from "antd";
import React from "react";
import connect from "react-redux/es/connect/connect";
import {createField} from "../components/inputFieldFactory";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const StyledRow = styled(Row)`
  padding: 20px 0;
`;

const InputField = ({field}) => {
  return createField(field);
};

const TellMeMore = ({survey}) => (
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
      <Button type="primary">Submit</Button>
    </StyledRow>
  </Container>
)

const mapStateToProps = (state) => ({
  survey: state.displaying
});

export default connect(mapStateToProps)(TellMeMore);