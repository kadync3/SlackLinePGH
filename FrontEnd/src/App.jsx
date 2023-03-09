import { useState } from 'react';
import { BrowserRouter, Routes, Route, json } from 'react-router-dom';
import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';
import DateTimePicker from 'react-datetime-picker'
import 'bootstrap/dist/css/bootstrap.min.css';

import PGHnavbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ScheduleLesson from './components/ScheduleLesson';



function App() {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [eventName, setEventName] = useState('');
  const [eventDiscription, setEventDiscription] = useState('');

  const session = useSession();
  const supabase = useSupabaseClient();
  const { isLoading } = useSessionContext();

  if (isLoading) {
    return <></>
  }
  async function googleSignIn (){
    const { error } =await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: 'https://www.googleapis.com/auth/calendar'
      }
    });
    if (error){
      alert("Error logging into google provider with Supabase");
      console.log(error)
    };
    };

    async function signOut (){
      await supabase.auth.signOut();
    };

    async function createCalendarEvent(){
    
      console.log("Creating Calendar Event")
      const event = {
        "summary" : eventName,
        "description": eventDiscription,
        "start" : {
          "dateTime" : start.toISOString(),
          "timeZone" :  Intl.DateTimeFormat().resolvedOptions().timeZone
        },
        "end" : {
          "dateTime" : end.toISOString(),
          "timeZone" :  Intl.DateTimeFormat().resolvedOptions().timeZone
        }
      }
    await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + session.provider_token
      },
      body : JSON.stringify(event)
    }).then((data)=> {
      return data.json();

    }).then((data)=>{
      console.log(data)
      alert("Lesson Scheduled check your Google Calandar!")
    })
    };
    console.log(session);
    console.log(eventName);
    console.log(eventDiscription);
    
    
  return (
  
    <div>
      {session ?  <BrowserRouter>
    <PGHnavbar/>
    <button onClick={()=> signOut()} > Sign Out</button>
      <form className='form' onSubmit={(event) => event.preventDefault()}>
    <p>Start of Event</p>
      <DateTimePicker onChange={setStart} value={start}/>
      <hr/>
      <p>End of Event</p>
      <DateTimePicker onChange={setEnd} value={end}/>
        <hr/>
        <input type="text " onChange={(e) => setEventName(e.target.value)} defaultValue='Full Name' onFocus={(e) => (e.target.value='')}  ></input>
        <hr/>
        <input type="int" onChange={(e) => setEventDiscription(e.target.value)} onFocus={(e) => (e.target.value='')} defaultValue='Type of Lessons' ></input>
        <hr/>
        <button type='submit'  onClick={() => createCalendarEvent()}>Create Lesson</button>
        
      </form>
      <Routes>
        <Route exact path="/" element={
            <LandingPage/>}/>
        <Route path='/ScheduleLesson' element={
            <ScheduleLesson/>} />   
       

      </Routes>
      
    </BrowserRouter>
    :
    <>
    <button onClick={()=> googleSignIn()} > Sign In With Google</button></>}
  
  
    </div>
  )
};

export default App;
