import './styles.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Top from './components/Top';
import Questions from './components/Questions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Top />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/result1" element={<Top />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
