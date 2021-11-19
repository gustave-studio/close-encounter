import './styles.css';
import React from 'react';

import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Top from './components/Top';
import Questions from './components/Questions';
import ResultPage from './components/ResultPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Top />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/result1" element={<ResultPage result="result1" />} />
      <Route path="/result2" element={<ResultPage result="result2" />} />
      <Route path="/result3" element={<ResultPage result="result3" />} />
      <Route path="/result4" element={<ResultPage result="result4" />} />
      <Route path="/result5" element={<ResultPage result="result5" />} />
      <Route path="/result6" element={<ResultPage result="result6" />} />
      <Route path="/result7" element={<ResultPage result="result7" />} />
      <Route path="/result8" element={<ResultPage result="result8" />} />
    </Routes>
  </BrowserRouter>
);

export default App;
