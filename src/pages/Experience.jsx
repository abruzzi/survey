import styled from "styled-components";
import {Button, Col, Row} from "antd";
import React from "react";
import TextField from "../components/field/TextField";
import {connect} from "react-redux";
import {removeItem, updateField} from "../states/actions";
import {deletableSelector} from "../states/selectors";

const StyledRow = styled(Row)`
  padding: 16px 0;
`;

class Experience extends React.Component {

  updateField = (field) => (_, value) => {
    console.log(value);
    const {id} = this.props;
    this.props.updateField(id, field, value);
  }

  removeItem = () => {
    const {id} = this.props;
    this.props.removeItem(id);
  }

  render () {
    const {project, period, stack, deletable} = this.props;

    return (<StyledRow gutter={16}  type="flex" justify="center" align="middle">
      <Col span={6}>
        <TextField value={project} onChange={this.updateField('project')} placeholder="Super project" />
      </Col>
      <Col span={6}>
        <TextField value={period} onChange={this.updateField('period')} placeholder="10 months" />
      </Col>
      <Col span={6}>
        <TextField value={stack} onChange={this.updateField('stack')} placeholder="JavaScript" />
      </Col>
      <Col span={6}>
        <Button
          type="danger"
          shape="circle"
          icon="delete"
          disabled={!deletable}
          onClick={this.removeItem}
        />
      </Col>
    </StyledRow>)
  }
}

const mapStateToProps = state => ({
  deletable: deletableSelector(state)
});

export default connect(mapStateToProps, {updateField, removeItem})(Experience);