import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

import 'bootstrap/dist/css/bootstrap.min.css';

import PGHnavbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ScheduleLesson from './components/ScheduleLesson';



function App() {
  const session = useSession();
  const supabase = useSupabaseClient();

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

    console.log(session);
    
  return (
  
    <div>
      {session ?  <BrowserRouter>
    <PGHnavbar/>
    <button onClick={()=> signOut()} > Sign Out</button>
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
