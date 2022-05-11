import React from "react";
import './LoginSuccess.css'
import { Link } from "react-router-dom";
import  logo  from './img/logo.png'
import Label from '../Login/components/Label/Label' 
const LoginSuccess = ({ loggedUser, setLoggedUser }) => {
  return(
        <>
      <nav>
      <img className="logo" src={logo} alt="" />  
      <div className="container-nav">
           
        <div className="container-btn-nav">
            <Link to='/logout'>
            <button
              style={{backgroundColor: "aquamarine"}}
              className="btn-nav"
              onClick={() => setLoggedUser({})}
            >
              Log out
            </button>
            </Link>
        </div>
      </div>
      </nav>  
      <div className="title">
      <Label text={`Bienvenido! ${loggedUser.name}`}/>
    </div>

    <h1 className="cursos-h1">Inscribete a tu clase</h1>
    <div className="cursos-disponibles">
         <div className="contenedor-fig1">
            <img src="https://t4t6b3a6.stackpathcdn.com/wp-content/uploads/2019/02/Desarrollo-Software-Medida.png" alt="" />
            <div className="capa">
              <Link to='./diplosoft'> <h2>Diplomatura de<br/>Desarrollo de<br/>Software</h2>
              </Link>
             </div>
          </div>
          <div className="contenedor-fig2">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxC3HaSbNtup4xqnlN0qb9gtDAnTsYVAZqEA&usqp=CAU" alt=""/>
            <div className="capa">
            <Link to='./backsoft'><h2> Backend </h2> 
            </Link>
            </div>
          </div>  
          <div className="contenedor-fig3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJuuYOWOmvZ0KWr1iGuKO5p94XFtcjwO05g&usqp=CAU" alt=""/>
            <div className="capa">
            <Link to='./frontsoft'><h2> Frontend </h2> 
            </Link>
            </div>
          </div> 
          <div className="contenedor-fig4">
          <img src="https://www.hn.cl/wp-content/uploads/2020/11/BDM-1.png" alt=""/>
            <div className="capa">
            <Link to='./dbsoft'><h2> Base de Datos </h2> 
            </Link>
            </div>
          </div>
    </div>
          <div className='footer-cursos'></div>
    
  </>
    )
}

export default LoginSuccess