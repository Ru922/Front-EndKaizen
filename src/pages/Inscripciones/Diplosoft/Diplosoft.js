import { Link } from 'react-router-dom'
import Label from '../../Login/components/Label/Label'
import logo from '../../Home/img/logo.png'

const InscripcionDiplosoft = () => {
    return (
        <div>
            <nav>
            <Link to= '/loginSuccess'>
            <img className="logo" src={logo} alt="" /> 
            </Link>    
            <Label text={'Inscripciones abiertas!'}/>  
            </nav>
        
             
                
                
            
        </div>
    )
}

export default InscripcionDiplosoft;