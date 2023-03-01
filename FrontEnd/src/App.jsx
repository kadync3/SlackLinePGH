import { useState } from 'react'

import LandingPage from './components/landingPage'
import './App'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <div className="App">

      
        <LandingPage/>

      <Button as="a" variant="primary">
    Teach Me Daddy K
      </Button>

      </div>
  )
}

export default App
