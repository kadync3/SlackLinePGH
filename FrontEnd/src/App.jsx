import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PGHnavbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScheduleLesson from './components/ScheduleLesson';

function App() {

  return (
    <BrowserRouter>
    <PGHnavbar/>
            
      <Routes>
        <Route exact path="/" element={
            <LandingPage/>}/>
        <Route path='/ScheduleLesson' element={
            <ScheduleLesson/>} />   
      </Routes>
    </BrowserRouter>
  )
};

export default App;
