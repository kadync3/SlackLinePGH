import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import styles from '../css/LandingPage.css'
import Card from 'react-bootstrap/Card';
import MyGoal from './MyGoal'


function LandingPage (){


  return (
<div className='landing'>
          
        <Card className='intro'>
        <Card.Img variant="top"  className="card-img" src="http://s3.amazonaws.com/visit-pittsburgh/CMS/Download-Files/Zoom-Backgrounds/Pittsburgh-Zoom_Pittsburgh-Skyline-Purple-Sky.png " />
        <Card.Body>
          <Card.Title className='card-img-overlay'>Slackline PGH</Card.Title>
          <Card.Text>
           Slacklining is a recreational activity in which a person stands or walks on a suspended length of flat webbing that is tensioned between two anchors. Slacklines are typically anchored between two trees, or two posts, or two boulders, and the line is tensioned using various techniques to create a dynamic and often bouncy surface to balance on. Slacklining can be used for balance training, tricklining , yoga, or for general physical fitness and recreation.
          </Card.Text>
        </Card.Body>
      </Card>
      <MyGoal/>
      </div>
  )
};


export default LandingPage;