import React from 'react';
import { Routes, Route } from 'react-router-dom';

import GlobalStyles from "./components/GlobalStyles";

import { Home } from "./pages/Home";
import Nav from "./components/Nav";


function App() {

  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/game/:id" element={<Home />} ></Route>
      </Routes>
    </div>
  )
}

export default App;
