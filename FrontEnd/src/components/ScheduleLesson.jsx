import Card from 'react-bootstrap/Card';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from '../css/LandingPage.css';

function ScheduleLesson() {
    return (
        <div>
            <h1>Schedule Lesson</h1>
            <form className='intro' >
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
            <input type="text" placeholder='Email'/>
            <input type="datetime-local"/>
            </form>
        </div>
    );
  }

// function updateCoachCalandar
// function updateClientCalandar


export default ScheduleLesson;