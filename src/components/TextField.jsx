import React from "react";
import styled from "styled-components";

import {Input} from 'antd';

const StyledLabel = styled.label`
  display: inline-block;
  padding: 8px 0 4px 0;
`;

const Label = ({text}) => <StyledLabel>{text}:</StyledLabel>

const TextField = ({label, placeholder=''}) => {
  return (
    <div>
      <Label text={label} />
      <Input placeholder={placeholder} />
    </div>)
}

export default TextField;