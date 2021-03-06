import React from 'react';
import { Radio } from 'antd';

import Label from './Label';

const RadioGroup = Radio.Group;

class QuestionAndAnswers extends React.Component {
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
    const { question, answers = []} = this.props;
    return (
      <div>
        <Label text={question} />
        <div>
          <RadioGroup onChange={this.handleChange} value={this.state.value}>
            {
              answers.map((answer, index) => <Radio key={index} value={answer.value}>{answer.label}</Radio>)
            }
          </RadioGroup>
        </div>
      </div>
    )
  }
}

export default QuestionAndAnswers;