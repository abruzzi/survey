import React from 'react';
import TextField from "./TextField";
import QuestionAndAnswers from "./QuestionAndAnswers";
import Dropdown from "./Dropdown";
import {connect} from "react-redux";
import {answer} from "../states/actions";

const mapStateToProps = (state) => ({
  answers: state.answers
});

const withAdrenaline = (Component) => {
  const WrapperComponent = ({survey, answer, answers}) => {
    const props = {
      id: survey.id,
      label: survey.question,
      placeholder: survey.question,
      question: survey.question,
      answers: survey.answers,
      options: survey.options,
      onChange: answer,
      value: answers[survey.id]
    };

    return <Component {...props} />
  };

  return connect(mapStateToProps, {answer})(WrapperComponent);
};

const ConnectedTextField = withAdrenaline(TextField);
const ConnectedQuestionAndAnswers = withAdrenaline(QuestionAndAnswers);
const ConnectedDropdown = withAdrenaline(Dropdown);

const inputFieldsMap = {
  text: ConnectedTextField,
  radio: ConnectedQuestionAndAnswers,
  dropdown: ConnectedDropdown
};

const link = (survey) => {
  const component = inputFieldsMap[survey.type];
  return React.createElement(component, {survey});
};

export {link}