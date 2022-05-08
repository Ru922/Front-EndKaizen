import React from "react";
import Login from './pages/Login/Login';
import LoginSuccess from './pages/LoginSuccess/LoginSuccess';
import CreateUser from './pages/CreateUser/CreateUser';
import Home from './pages/Home/Home';


import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.css'

function App() {
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="createUser" element={<CreateUser />} />
          <Route path="loginSuccess" element={<LoginSuccess />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;