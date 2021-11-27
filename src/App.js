import './styles.css';
import React, { useState } from 'react';

import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Top from './components/Top';
import Questions from './components/Questions';
import ResultPage from './components/ResultPage';

const App = () => {
  const [questionNumber, setQuestionNumber] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Top questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />} />
        <Route path="/questions" element={<Questions questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />} />
        <Route path="/result1" element={<ResultPage result="result1" setQuestionNumber={setQuestionNumber} />} />
        <Route path="/result2" element={<ResultPage result="result2" setQuestionNumber={setQuestionNumber} />} />
        <Route path="/result3" element={<ResultPage result="result3" setQuestionNumber={setQuestionNumber} />} />
        <Route path="/result4" element={<ResultPage result="result4" setQuestionNumber={setQuestionNumber} />} />
        <Route path="/result5" element={<ResultPage result="result5" setQuestionNumber={setQuestionNumber} />} />
        <Route path="/result6" element={<ResultPage result="result6" setQuestionNumber={setQuestionNumber} />} />
        <Route path="/result7" element={<ResultPage result="result7" setQuestionNumber={setQuestionNumber} />} />
        <Route path="/result8" element={<ResultPage result="result8" setQuestionNumber={setQuestionNumber} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
