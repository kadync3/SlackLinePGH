import Card from 'react-bootstrap/Card';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from '../css/LandingPage.css';

function ScheduleLesson() {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Sign Up For LEssons Here!</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <form className='intro' >
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
            <input type="text" placeholder='Email'/>
            <input type="datetime-local"/></form>
        </Card.Body>
      </Card>
    );
}

// function updateCoachCalandar
// function updateClientCalandar


export default ScheduleLesson;

{/* <h1>Schedule Lesson</h1>
<form className='intro' >
<input type="text" placeholder='First Name'/>
<input type="text" placeholder='Last Name'/>
<input type="text" placeholder='Email'/>
<input type="datetime-local"/></form> */}