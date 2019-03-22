import React from "react";
import {Input} from 'antd';

import Label from './Label'

class TextField extends React.Component {
  state = {
    value: this.props.value || ''
  }

  handleChange = (e) => {
    const {onChange = () => {}} = this.props;
    this.setState({
      value: e.target.value
    }, onChange(e.target.value))
  };

  render() {
    const {label, placeholder=''} = this.props;

    return (
      <div>
        <Label text={label} />
        <Input placeholder={placeholder} onChange={this.handleChange} value={this.state.value} />
      </div>)
  }
}

export default TextField;