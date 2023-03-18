// import logo from './logo.svg';
import React, { useState } from 'react';

import './App.css';
import Alert from './compenents/Alert';
// import About from './compenents/About';
import Navbar from './compenents/Navbar';
import TextForm from './compenents/TextForm';   
// import {
//   BrowserRouter as Router,
//   Routes, 
//   Route,
//   link
  

// } from "react-router-dom";




function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const changegreen = ()=>{
    document.body.style.backgroundColor = '#35C649'
  }
  const changeyellow = ()=>{
    document.body.style.backgroundColor = '#CAB911'
  }
  const changered = ()=>{
    document.body.style.backgroundColor = '#C15031'
  }

  const showAlert = (message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setAlert(null)
        }, 2000);
  }

  const toggleNav= ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor= "#042743"
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= "white"
      showAlert("Light mode has been enabled","success")
    }
  }
 
  return (
  <>


  {/* <Router> */}
 
<Navbar  title = "TextUtils" mode={mode} toggleNav={toggleNav} changegreen={changegreen} changered={changered} changeyellow={changeyellow}/>
<Alert alert={alert}/>
<div className="container">
    {/* <Routes>
          <Route path="/about" element= {<About/>}/> */}
          {/* <Route path="/" element={ */}
          <TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode={mode}/>
    {/* </Routes> */}
   </div>
   {/* </Router> */}
</>
  );
  
}



export default App;
