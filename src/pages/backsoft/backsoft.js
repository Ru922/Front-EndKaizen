import React from "react";
import { Link } from 'react-router-dom';
import logo from './img/logo.png'
import './backsoft.css'



const Backsoft = () => {

    return(
     <body>
        <nav>
           <Link to="/"><img className="logo" src={logo} alt="" /></Link>
           
            <div className="container-nav">
              <div className="container-btn-nav">
                 <Link className='btn-nav' to='/login'>
                   <button style={{backgroundColor: "aquamarine"}} className="btn-nav">
                     Log In
                   </button>
                 </Link>
            
                  <Link to= '/createUser'>
                     <button style={{backgroundColor: "#4dff00"}} className="btn-nav">
                       Registrate
                      </button>
                    </Link>
             </div>
            </div>         
        </nav>
        <div className="container">
            <article className="articulo">
              <h1 className="articulo-h1"> POR QUÉ SER DEVELOPER</h1>
                <p>
                    “Certified Tech Developer” es una carrera pensada y diseñada por Mercado Libre y Globant junto a Digital House, donde aprenderás los conocimientos técnicos y una serie de soft skills fundamentales para conseguir trabajo en las empresas más revolucionarias del momento.<br/>
                    Ser developer te asegura una amplia oferta de trabajo, buen salario y la posibilidad de trabajar para y desde cualquier parte del mundo con flexibilidad horaria e independencia. ¿Qué más podemos esperar de una carrera?.
                </p>
            </article> 
        </div>
        <div className="container-form sign-up">
    
           <div className="formulario">
                <h2 className="create-account">Crear una cuenta</h2>
            <Link to='/Login'>  
                <input type="button" value="Registrarse"/>
            </Link>
            </div>
    </div>
     </body>
    )
}

export default Backsoft