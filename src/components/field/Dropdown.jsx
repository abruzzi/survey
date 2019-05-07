import React from 'react';
import { Select } from 'antd';
import Label from "./Label";

const Option = Select.Option;

class Dropdown extends React.Component {
  state = {
    value: this.props.value || ''
  };

  handleChange = (value) => {
    const {id, onChange = () => {}} = this.props;

    this.setState({
      value
    }, () => onChange(id, value))
  };


  render() {
    const {options, label, placeholder=''} = this.props;

    return (
      <div>
        <Label text={label} />
        <div>
          <Select
            style={{ width: '100%' }}
            placeHolder={placeholder}
            optionFilterProp="children"
            onChange={this.handleChange}
            defaultValue={this.state.value}
          >
            {options.map((option, index) => <Option key={index} value={option.value}>{option.label}</Option>)}
          </Select>
        </div>
      </div>)
  }
}

export default Dropdown;