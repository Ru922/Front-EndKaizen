import { Link } from 'react-router-dom';
import React from "react";
import logo from './img/logo.png'
import './frontsoft.css'

const Frontsoft = () => {

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
              <h1 className="articulo-h1"> ¿Qué es el Front-end?</h1>
                <p>
                Se relaciona con todo lo que ven las personas, esto incluye el diseño (bien sea UI o UX) y ciertos lenguajes.

                Además, destaca por su característica funcional, pues sirve para que el usuario entre e interactúe con cualquier sitio. Motivo por el que debe cumplir con altos estándares de usabilidad y estética.

                Podemos decir que el Front-end es la capa que se encuentra por encima del Back-end, ya que comprende menús desplegables, imágenes, íconos, colores, elementos gráficos, animaciones y, sin lugar a dudas, mejora la experiencia de navegación en el lado delantero o frontal.

                Quienes desarrollan el Front-end son responsables del código orientado a la inmersión del sujeto en el sitio. Para lograrlo los expertos deben conocer tres idiomas esenciales:

                Javascript;
                CSS;
                HTML.
                Así como estar familiarizados con frameworks como:

                Foundation;
                Bootstrap;
                AngularJS; 
                Ember JS;
                Backbone.
                </p>
            </article> 
        </div>
           <div className='conatiner-img'>
             <img className="img-front" src="https://www.digitalhouse.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fdh-frontend%2Fd41322ef-1988-40a7-8726-8ee674194ab5_pexels-thisisengineering-comprimida.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75" alt="" />     
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

export default Frontsoft