import './styles.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Top from './components/Top';
import Questions from './components/Questions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Top />}>
        </Route>
        <Route path="/questions" element={<Questions />}>
        </Route>
        <Route path="/result1" element={<Top />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
