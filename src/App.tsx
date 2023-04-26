import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes, useNavigate } from 'react-router-dom';
import Login from './components/login';
import Map from './components/map';
import Vehicle from './components/vehicle';
import VehiclePage from './components/vehicle';
import { randomInt } from 'crypto';
import TaskAssign from './components/taskassign';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/assigntask' element={<TaskAssign/>}/>
      <Route path='/vehicle' element={<VehiclePage/>}/>
    </Routes>
  );
}

export default App;
