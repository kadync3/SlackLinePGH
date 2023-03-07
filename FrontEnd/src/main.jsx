import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createClient } from '@supabase/supabase-js'
import { SessionContextProvider } from '@supabase/auth-helpers-react'


const supabase = createClient(
  "https://kedyhzhumlqsiiaqqqgq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlZHloemh1bWxxc2lpYXFxcWdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxOTg4MDYsImV4cCI6MTk5Mzc3NDgwNn0.xp7wUvusCmHXuePwBzmmGHXyvKK71TqGbmCifRFMj2w"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <SessionContextProvider supabaseClient={supabase}>
    <App />
  </SessionContextProvider>
 
)
