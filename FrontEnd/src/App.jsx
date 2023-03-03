import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PGHnavbar from './components/navbar';
import LandingPage from './components/landingPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <BrowserRouter>
    <PGHnavbar/>
            
      <Routes>
        <Route exact path="/" element={
            <LandingPage/>}/>
        
      </Routes>
    </BrowserRouter>
  )
};

export default App;
