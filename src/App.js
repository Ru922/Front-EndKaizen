import React from "react";
import Login from './pages/Login/Login';
import LoginSuccess from './pages/LoginSuccess/LoginSuccess';
import CreateUser from './pages/CreateUser/CreateUser';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.css'
import Diplomatura from "./pages/diplosoft/dilposoft";
import Backsoft from "./pages/backsoft/backsoft";
import Dbsoft from "./pages/dbsoft/dbsoft";
import Frontsoft from "./pages/frontsoft/frontsoft";
import InscripcionDiplosoft from './pages/Inscripciones/Diplosoft/Diplosoft'
import Logout from "./pages/Logout/Logout";

function App() {
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="createUser" element={<CreateUser />} />
          <Route path="loginSuccess" element={<LoginSuccess />} />
          <Route path="diplosoft" element={<Diplomatura />} />
          <Route path="backsoft" element={<Backsoft />} />
          <Route path="dbsoft" element={<Dbsoft />} />
          <Route path="frontsoft" element={<Frontsoft />} />
          <Route path="loginSuccess/diplosoft" element={<InscripcionDiplosoft/>}/>
          <Route path="logout" element={<Logout/>} />
          <Route path="/" element={<Home />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;