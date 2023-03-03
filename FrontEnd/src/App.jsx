
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import PGHnavbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import MyGoal from './components/MyGoal'


function App() {

  return (
    <BrowserRouter>
    <PGHnavbar/>
            
      <Routes>
        <Route exact path="/" element={
            <LandingPage/>}/>
        <Route path='/mygoal' element={
            <MyGoal/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
