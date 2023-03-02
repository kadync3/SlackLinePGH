import { useState } from 'react'
import styles from '../css/LandingPage.css'
import Card from 'react-bootstrap/Card';

function LandingPage (){


  return (
<div className='landing'>
    
        <Card className='intro'>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi012vWZuT0O8NgOjoucvuPbG5R5iFw4CBCq1gNW8aZA&usqp=CAU&ec=48600113" />
        <Card.Body>
          <Card.Text>
           Slacklining is a recreational activity in which a person stands or walks on a suspended length of flat webbing that is tensioned between two anchors. Slacklines are typically anchored between two trees, or two posts, or two boulders, and the line is tensioned using various techniques to create a dynamic and often bouncy surface to balance on. Slacklining can be used for balance training, tricklining , yoga, or for general physical fitness and recreation.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    
  )
};


export default LandingPage;