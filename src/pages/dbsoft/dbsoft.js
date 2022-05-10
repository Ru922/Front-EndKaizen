import { Link } from 'react-router-dom';
import React from "react";
import logo from './img/logo.png'
import './dbsoft.css'

const Dbsoft = () => {

    return(
       <>
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
              <h1 className="articulo-h1"> ¿Qué estudiar para aprender gestión y manejo de Bases de Datos?</h1>
                <p>
                El manejo de bases de datos es algo imprescindible cuando alguien se dedica a la ciencia de los datos. Una profesión que en la actualidad requiere de profesionales especializados y con estudios concretos en Data Science.

                La evolución de la ciencia de datos ha sido una tendencia importante en los últimos años. El uso del Big Data ha transformado la forma en que se consume y se mide la información. Y es por eso por lo que es tan importante que los profesionales aprendan correctamente el manejo de bases de datos.

                El mundo del empleo está cambiando. Junto con la transformación digital, la forma en que los clientes interactúan con una empresa ha cambiado. La empresa a menudo necesita saber más sobre sus clientes para poder ofrecer un mejor servicio y para ello necesitan profesionales que sean capaces de interpretar y analizar grandes cantidades de datos para su mejora.

                La ciencia de datos es uno de los trabajos más prometedores de la nueva economía. Cubre una amplia gama de habilidades y profesionales que pueden trabajar con conjuntos de datos para extraer información. Se ha convertido en una parte ineludible de vivir en el siglo XXI. Y estudiándola se puede aprender el manejo de bases de datos.
                </p>
            </article> 
        </div>
           <div className='conatiner-img'>
             <img className="img-front" src="https://www.programaenlinea.net/wp-content/uploads/2017/08/base-de-datos-sql-768x394.jpg" alt="" />     
           </div>  
        <div className="container-form sign-up">
            <div className="formulario">
                    <h2 className="create-account">Crear una cuenta</h2>
                <Link to='/Login'>  
                    <input type="button" value="Registrarse"/>
                </Link>
            </div>
        </div>             
        </>
    )
}

export default Dbsoft