import React from "react";
import {Row, Button} from 'antd';
import styled from "styled-components";
import {connect} from "react-redux";
import {addExperience} from "../states/actions";

import Experience from './Experience';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    padding-top: 20px;
    text-transform: uppercase;
  }
`;

const ExperienceForm = ({experience, addExperience}) => {
  return (<Container>
    <h2>Work experience</h2>
    {experience.map(expr => <Experience key={expr.id} {...expr} />)}
    <Row>
      <Button type="primary" onClick={addExperience}>Add Experience</Button>
    </Row>
  </Container>);
}

const mapStateToProps = state => ({
  experience: state.experience,
});

export default connect(mapStateToProps, { addExperience })(ExperienceForm);

