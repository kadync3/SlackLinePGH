import { useState } from 'react'

import LandingPage from './components/landingPage'
import './App'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <div className="App">

          <a href="https://vitejs.dev" target="_blank">
            <img src="https://us.123rf.com/450wm/thesilhouettequeen/thesilhouettequeen2010/thesilhouettequeen201008659/158114154-slacklining-silhouette-vector.jpg?ver=6  " className="logo" alt="Vite logo" />
         </a>
      
        <LandingPage/>

      <Button as="a" variant="primary">
    Teach Me Daddy K
      </Button>

      </div>
  )
}

export default App
