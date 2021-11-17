import React, { useState, useEffect, useRef } from 'react';

import { CSSTransition } from 'react-transition-group';
// import PropTypes from 'prop-types';
import Question from './Question';

const Questions = () => {
  const nodeRef = useRef(null);

  const questionText = ["質問1です", "質問2です", "質問3です"]
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answer1, setAnser1] = useState(null);
  const [answer2, setAnser2] = useState(null);
  const [answer3, setAnser3] = useState(null);

  const setAnswers = [setAnser1, setAnser2, setAnser3]

  const [showQuestion, setShowQuestion] = useState(true);

  

  const nextQuestion = () => {
    if (answer1 === null) {
      setQuestionNumber(0);
      setShowQuestion(true)
    } else if (answer1 === true) {
      setQuestionNumber(1)
      setShowQuestion(true)
    } else {
      setQuestionNumber(2)
      setShowQuestion(true)
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