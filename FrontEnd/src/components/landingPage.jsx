import { useState } from 'react'
import styles from '../css/LandingPage.css'

function LandingPage (){


  return (
<div className='landing'>
    
        <a href="https://vitejs.dev" target="_blank">
          <img src="https://us.123rf.com/450wm/thesilhouettequeen/thesilhouettequeen2010/thesilhouettequeen201008659/158114154-slacklining-silhouette-vector.jpg?ver=6  " className="logo" alt="Vite logo" />
        </a>
      
      
  <div className='intro' >
     {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi012vWZuT0O8NgOjoucvuPbG5R5iFw4CBCq1gNW8aZA&usqp=CAU&ec=48600113'></img> */}
      <h1>SlackLinePGH</h1>
      <div className='description'>
Slacklining is a recreational activity in which a person stands or walks on a suspended length of flat webbing that is tensioned between two anchors. Slacklines are typically anchored between two trees, or two posts, or two boulders, and the line is tensioned using various techniques to create a dynamic and often bouncy surface to balance on. Slacklining can be used for balance training, tricklining , yoga, or for general physical fitness and recreation.
      </div>
     </div>
    </div>
  )
};


export default LandingPage;