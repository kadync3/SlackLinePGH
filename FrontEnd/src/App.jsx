import { useState } from 'react'
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import PGHnavbar from './components/navbar';
import LandingPage from './components/landingPage'
import './App'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <BrowserRouter>
    <PGHnavbar/>
            
      <Routes>
        <Route path="/home" element={
            <LandingPage/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
