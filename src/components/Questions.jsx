import React, { useState, useEffect, useRef } from 'react';

import { CSSTransition } from 'react-transition-group';
// import PropTypes from 'prop-types';
import Question from './Question';
import { useNavigate } from 'react-router-dom';

const Questions = () => {
  const nodeRef = useRef(null);

  const questionText = ["あなたは本はよく読みますか？",
                        "個性派小説が読みたいと思いますか？",
                        "長い小説を読むのに抵抗感がありますか？",
                        "言葉遊びが好きですか？",
                        "AIやロボットに興味がある",
                        "短い小説なら読めそうですか？",
                        "推しのアイドルがいますか？"]

  const [questionNumber, setQuestionNumber] = useState(0);
  const [answer1, setAnser1] = useState(null);
  const [answer2, setAnser2] = useState(null);
  const [answer3, setAnser3] = useState(null);
  const [answer4, setAnser4] = useState(null);
  const [answer5, setAnser5] = useState(null);
  const [answer6, setAnser6] = useState(null);
  const [answer7, setAnser7] = useState(null);

  const setAnswers = [setAnser1, setAnser2, setAnser3, setAnser4, setAnser5, setAnser6, setAnser7]

  const [showQuestion, setShowQuestion] = useState(true);

  const navigate = useNavigate;

  const nextQuestion = () => {
    if (answer1 === null) {
      setQuestionNumber(0);
      setShowQuestion(true)
    } else if (answer1 === true) {
      if (answer2 === null) {
        setQuestionNumber(1);
        setShowQuestion(true)
      } else if(answer2 === true) {
        if (answer4 === null) {
          setQuestionNumber(3)
          setShowQuestion(true)
        } else if (answer4 === true) {
          navigate('/result1');
        } else if (answer4 === false) {
          navigate('/result2');
        }
      } else if(answer2 === false) {
        if (answer5 === null) {
          setQuestionNumber(4)
          setShowQuestion(true)
        } else if (answer5 === true) {
          navigate('/result3');
        } else {
          navigate('/result4');
        }
      }
    } else if (answer1 === false) {
      if (answer3 === null) {
        setQuestionNumber(2);
        setShowQuestion(true)
      } else if(answer3 === true) {
        if (answer6 === null) {
          setQuestionNumber(5)
          setShowQuestion(true)
        } else if (answer6 === true) {
          navigate('/result5');
        } else if (answer6 === false) {
          navigate('/result6');
        }
      } else if(answer3 === false) {
        if (answer7 === null) {
          setQuestionNumber(6)
          setShowQuestion(true)
        } else if (answer7 === true) {
          navigate('/result7');
        } else if (answer7 === false) {
          navigate('/result8');
        }
      }
    }
  }

  useEffect(() => {
    nextQuestion()
  })

  console.log('----')
  console.log(questionNumber)
  console.log(answer1)
  console.log(showQuestion)

  const change = () => {
    setShowQuestion(!showQuestion)
  }

  return (
    <>
    
    <div ref={nodeRef}>
      <CSSTransition
        in={showQuestion}
        timeout={500}
        classNames="question"
        // classNames="react-transition-group"
        unmountOnExit
        // onExited={() => setShowQuestion(false)}
        nodeRef={nodeRef}
      >
        <Question
          questionNumber={questionNumber}
          questionText={questionText[questionNumber]}
          setAnswer={setAnswers[questionNumber]}
          setQuestionNumber={setQuestionNumber}
          setShowQuestion={setShowQuestion}
        />
     </CSSTransition>
     </div>
    </>
  );
};


export default Questions;