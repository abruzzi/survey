import styled from "styled-components";
import React from "react";

const StyledLabel = styled.label`
  display: inline-block;
  padding: 16px 0 4px 0;
  font-weight: bold;
  font-size: 1rem;
`;

const Label = ({text}) => <StyledLabel>{text}</StyledLabel>

export default Label;