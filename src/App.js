import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
// import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    });
    setTimeout (()=>{
     setAlert(null) 
    },1500)
    
    
  }

const modeToggler = () =>{
  if(mode === 'dark')
  {
    setMode("light")
    document.body.style.color = '#212529e3'
    document.body.style.backgroundColor = 'white'
    showAlert("Dark Mode Disabled","success");
    // document.title = "textUtils-Light Mode" ;

  }
  else{
    setMode("dark")
    document.body.style.color = 'white'
    document.body.style.backgroundColor = '#212529e3'
    showAlert("Dark Mode Enabled","success");
    // document.title ="textUtils-Dark Mode";
  }
}

  return (
    <>
    {/* <Router> */}
    <Navbar title = "TextUtils" aboutText = "About Us" mode={mode} modeToggler ={modeToggler}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Switch>
          <Route  path="/about">
          <About/>
          
          </Route>
          <Route  path="/" > */}
            <TextArea showAlert = {showAlert} heading = "Enter the text to analyse" mode={mode}/>
          {/* </Route>
    </Switch> */}
    

    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
