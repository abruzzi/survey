import React from 'react';
import TextField from "./field/TextField";
import QuestionAndAnswers from "./field/QuestionAndAnswers";
import Dropdown from "./field/Dropdown";
import {connect} from "react-redux";
import {answer} from "../states/actions";

const mapStateToProps = (state) => ({
  answers: state.app.answers
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
      onChange: (id, value) => answer(id, value, answers),
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

const createField = (survey) => {
  const component = inputFieldsMap[survey.type];
  return React.createElement(component, {survey});
};

export {createField}