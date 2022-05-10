import { Link } from 'react-router-dom';
import React from "react";
import logo from './img/logo.png'
import video from './video/diplomatura.mp4' 

import './diplosoft.css'

const Diplomatura = () => {

    return(
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
      <div  className="video">
      <video style={{backgroundcolor:"rgba(255, 255, 255, 0.45)"}}autoplay controls src={video}></video>
     
      <div className="text-info">
      <Link className="Link" to="/login">
        <span className="Link-title">
        ¿Sientes que la tecnología es lo tuyo? Genial, es un campo muy prometedor dada la prominencia que tiene el sector digital en el mundo en el que vivimos. Si te atrae la perspectiva de crear sistemas informáticos que lleven a cabo tareas y satisfagan las necesidades de los usuarios, tal vez necesitas estudiar la diplomatura de desarrollo de software.
        Además, esta carrera puede brindarte una serie de beneficios profesionales a los que no tendrías acceso por medio de otra profesión. 
        <h2 style={{textAlign:'center'}}>Para más info<br/> Tocá aquí</h2>
            </span>
      
      </Link>
</div>


</div>
      </nav>  
    )
}

export default Diplomatura