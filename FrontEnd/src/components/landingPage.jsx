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
    
    </div>
    </div>
  )
};


export default LandingPage;