import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PGHnavbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScheduleLesson from './components/ScheduleLesson';
import MyGoal from './components/MyGoal'


function App() {

  return (
    <BrowserRouter>
    <PGHnavbar/>
            
      <Routes>
        <Route exact path="/" element={
            <LandingPage/>}/>
        <Route path='/ScheduleLesson' element={
            <ScheduleLesson/>} />   
        <Route path='/mygoal' element={
            <MyGoal/>}/>

      </Routes>
    </BrowserRouter>
  )
};

export default App;
