import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/landingPage'


function App() {


  return (
    <BrowserRouter className="App">


          <Link to="" target="_blank">
            <img src="https://us.123rf.com/450wm/thesilhouettequeen/thesilhouettequeen2010/thesilhouettequeen201008659/158114154-slacklining-silhouette-vector.jpg?ver=6  " className="logo" alt="Vite logo" />
         </Link>

        <LandingPage/>
    </BrowserRouter>
  )
}

export default App
