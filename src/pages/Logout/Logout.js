import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../Home/img/logo.png'
import './Logout.css';

const Logout = () => {
  return(
    <>
      <nav>
      <img className="logo" src={logo} alt="" />  
      </nav>  
        <div className="title">
        <p>Gracias por conectarse. Lo esperamos</p>
        </div>

    <div className="text-rigth">
    
      <p>
            Si desea ingresar nuevamente:
            <Link className='btn-nav' to='/login'>
                <button style={{backgroundColor: "aquamarine"}} className="btn-nav">
                Log In
                </button>
            </Link>
       </p>  
            Si desea volver a la pagina principal:
            <Link className='btn-nav' to='/'>
                <button style={{backgroundColor: "aquamarine"}} className="btn-nav">
                Home
                </button>
            </Link> 
       <p>

       </p>
    </div>
    
    
  </>
  )
}


export default Logout;
