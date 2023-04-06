import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Map from './components/map';

function App() {
  return (
    <Routes>
      <Route path='/' element={<></>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/map' element={<Map/>}/>
      <Route path='/contact' element={<></>}/>
    </Routes>
  );
}

export default App;
