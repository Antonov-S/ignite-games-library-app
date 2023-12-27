import React from 'react';
import { Routes, Route } from 'react-router-dom';

import GlobalStyles from "./components/GlobalStyles";

import { Home } from "./pages/Home";


function App() {

  return (
    <div>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/game/:id" element={<Home />} ></Route>
      </Routes>
    </div>
  )
}

export default App;
