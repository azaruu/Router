import React from 'react'
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import './App.css'
import Register from './RouterComponent/Register';
import Login from './RouterComponent/Login';
import Home from './RouterComponent/Home';



function App() {
  return (
    <div>
        <Router>
          <Routes>

             <Route exact path='/' element={<Register/>}/>
             <Route exact path='/login' element={<Login/>}/>
             <Route exact path='/home' element={<Home/>}/>

          </Routes>
        </Router>
    </div>
  )
}

export default App
