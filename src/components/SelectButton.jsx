import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const SelectButton = (props) => {
  const {
   setAnswer, questionNumber, setQuestionNumber, setShowQuestion
  } = props;

  const ButtonToNextQuestion = (nextQuestionNumber) => (
    <>
      <Button
        variant="contained"
        style={{ fontSize: '20px' }}
        onClick={() => {
            setAnswer(true);
            setQuestionNumber(nextQuestionNumber)
            setShowQuestion(false)
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
            setQuestionNumber(nextQuestionNumber)
            setShowQuestion(false)
        }}
      >
        いいえ
      </Button>
    </>
  );

  return (
    <>
      <Grid container>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <div>
            <Stack spacing={2} direction="row">
              <Grid item container direction="column" spacing={0}>
                { ButtonToNextQuestion(questionNumber + 1) }
              </Grid>
            </Stack>
          </div>
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </>
  );
};

SelectButton.propTypes = {
  setAnswer: PropTypes.func.isRequired,
  questionNumber: PropTypes.number.isRequired,
  setQuestionNumber: PropTypes.func.isRequired,
  setShowQuestion: PropTypes.func.isRequired
};

export default SelectButton;