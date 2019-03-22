import React from "react";
import {Input} from 'antd';

import Label from './Label'

const TextField = ({label, placeholder=''}) => {
  return (
    <div>
      <Label text={label} />
      <Input placeholder={placeholder} />
    </div>)
}

export default TextField;