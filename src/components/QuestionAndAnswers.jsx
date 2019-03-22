import React from 'react';
import { Radio } from 'antd';

import Label from './Label';

const RadioGroup = Radio.Group;

const QuestionAndAnswers = ({onChange, value, question, answers=[]}) => {
  return (
    <div>
      <Label text={question} />
      <div>
        <RadioGroup onChange={onChange} value={value}>
          {
            answers.map((answer, index) => <Radio key={index} value={answer.value}>{answer.label}</Radio>)
          }
        </RadioGroup>
      </div>
    </div>
  );
};

export default QuestionAndAnswers;