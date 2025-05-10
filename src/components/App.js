
import React from "react";
import './../styles/App.css';
import { useState } from 'react'
import isLoggedIn from "./isLoggedIn.js";

const App = () => {
   const[login,setLogin]=useState(false)
  return (
    <div>
        {login ? <h1>You are logged in!</h1>:
        <IsLoggedIn setLogin={setLogin}/>
        }
        
    </div>
  )
}

export default App
