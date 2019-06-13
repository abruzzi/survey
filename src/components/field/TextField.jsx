import React from "react";
import {Input} from 'antd';

import Label from './Label'

class TextField extends React.Component {
  state = {
    value: this.props.value || ''
  };

  handleChange = (e) => {
    const {id, onChange = () => {}} = this.props;
    const value = e.target.value;

    this.setState({
      value
    }, () => onChange(id, value))
  };

  render() {
    const {label, placeholder = '', value} = this.props;

    return (
      <div>
        {label && <Label text={label} />}
        <Input
          placeholder={placeholder}
          onChange={this.handleChange}
          value={value ? value : this.state.value} />
      </div>)
  }
}

export default TextField;