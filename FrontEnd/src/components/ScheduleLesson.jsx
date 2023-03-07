import Card from 'react-bootstrap/Card';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from '../css/LandingPage.css';


// supabase pass: 4A2y6TEFvCanjlrQ

function ScheduleLesson() {
    return (
        <div className='lessons'>
         
            <div >
            <h1 style={{}} >Schedule Lessons</h1>
            <form className='form' >
            <input className='form-children' type="text" placeholder='First Name'/>
            <input className='form-children' type="text" placeholder='Last Name'/>
            <input className='form-children' type="text" placeholder='Email'/>
            <input className='form-children' type="datetime-local"/>
            <input className='form-children' type="submit"/>
            </form>
            </div>
        </div>
    );
  }

// function updateCoachCalandar
// function updateClientCalandar


export default ScheduleLesson;