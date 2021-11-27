import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const ButtonToNextQuestion = (props) => {
  const {
    setAnswer, questionNumber, setQuestionNumber, setShowQuestion,
  } = props;

  return (
    <>
      <Button
        variant="contained"
        style={{ fontSize: '20px' }}
        onClick={() => {
          setAnswer(true);
          setQuestionNumber(questionNumber + 1);
          setShowQuestion(false);
        }}
      >
        はい
      </Button>
      <br />
      <Button
        variant="outlined"
        style={{ fontSize: '20px' }}
        onClick={() => {
          setAnswer(false);
          setQuestionNumber(questionNumber + 1);
          setShowQuestion(false);
        }}
      >
        いいえ
      </Button>
    </>
  );
};

ButtonToNextQuestion.propTypes = {
  setAnswer: PropTypes.func.isRequired,
  questionNumber: PropTypes.number.isRequired,
  setQuestionNumber: PropTypes.func.isRequired,
  setShowQuestion: PropTypes.func.isRequired,
};

export default ButtonToNextQuestion;
