import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<></>}/>
      <Route path='/about' element={<></>}/>
      <Route path='/contact' element={<></>}/>
    </Routes>
  );
}

export default App;
