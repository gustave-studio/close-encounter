import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import SelectButton from './SelectButton';

const Question = (props) => {
  const {
    questionNumber, questionText, setAnswer, setQuestionNumber, setShowQuestion,
  } = props;

  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <div className="question">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h4" component="span">
                質問
                {questionNumber + 1}
              </Typography>
              <Typography variant="body2" component="span">
                <p>{questionText}</p>
                <br />
                <SelectButton
                  setAnswer={setAnswer}
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}
                  setShowQuestion={setShowQuestion}
                />
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

Question.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  questionText: PropTypes.string.isRequired,
  setAnswer: PropTypes.func.isRequired,
  setQuestionNumber: PropTypes.func.isRequired,
  setShowQuestion: PropTypes.func.isRequired,
};

export default Question;
