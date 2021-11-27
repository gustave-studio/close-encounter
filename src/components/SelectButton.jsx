import React from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import ButtonToNextQuestion from './ButtonToNextQuestion';

const SelectButton = (props) => {
  const {
    setAnswer, questionNumber, setQuestionNumber, setShowQuestion,
  } = props;

  return (
    <Grid container>
      <Grid item xs={3} />
      <Grid item xs={6}>
        <div>
          <Stack spacing={2} direction="row">
            <Grid item container direction="column" spacing={0}>
              <ButtonToNextQuestion
                setAnswer={setAnswer}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                setShowQuestion={setShowQuestion}
              />
            </Grid>
          </Stack>
        </div>
      </Grid>
      <Grid item xs={3} />
    </Grid>
  );
};

SelectButton.propTypes = {
  setAnswer: PropTypes.func.isRequired,
  questionNumber: PropTypes.number.isRequired,
  setQuestionNumber: PropTypes.func.isRequired,
  setShowQuestion: PropTypes.func.isRequired,
};

export default SelectButton;
