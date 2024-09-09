import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/section/:section" element={<Home />} />
      </Routes>
  );
}

export default App
