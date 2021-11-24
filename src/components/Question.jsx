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

  const progressRate = () => {
    switch (questionNumber) {
      case 0:
        return '0';
      case 1:
      case 2:
        return '33';
      case 3:
      case 4:
      case 5:
      case 6:
        return '66';
      default:
        return '90';
    }
  };

  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <div className="questionHeader">
          <h1>SFと出会う診断</h1>
          <h2>(初心者編)</h2>
          <progress id="file" max="100" value={progressRate()} />
        </div>
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
