import React, { useState } from "react";
import { Redirect, Link } from 'react-router-dom';
import './Login.css'
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";
/* import Button from '../../commons/RegularButton'; */
import ModalError from '../../commons/ModalError'

const Login = () => {

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState(false);
    const [ isLogin, setIsLogin ] = useState(false); //usar despues para el login
    const [ hasError, setHasError ] = useState(false);



    function handleChange(name, value) {
        if(name === 'usuario'){
            setUser(value)
        } else{
            if(value.length < 6 ){
                setPasswordError(true)
            } else {
                setPassword(value)
                setPasswordError(false)
            }
        }
    }

    function ifMatch(param) {
        if(param.user.length > 0 && param.password.length > 0){
            if(param.user === 'Ruben' && param.password === '123456'){ // aca cambiar a lo de la base de datos
                const { user, password } = param;
                let ac = {user, password}
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true)
            } else{
                setIsLogin(false);
                setHasError(true);
            }
        } else {
            setIsLogin(false)
            setHasError(true);
        };
    };

    function handleSubmit(){
        let account = { user, password }
        if(account){
            ifMatch(account)
        }
    }

    return (

        <div className="login-container">

            { isLogin && <Redirect to= '/home' />}

                <Title text='Bienvenido!'/>
                { hasError && 
                <ModalError
                title='Ocurrio un error!'
                text="Usuario o contraseña no existen"
            
            />
            }
            <Label text='Usuario'/>
            <Input 
            attribute={{
                id:'usuario',
                name: 'usuario',
                type: 'text',
                placeholder: 'Ingrese su usuario'
            }}
            handleChange={handleChange}
            />
            <Label text='Contraseña'/>
            <Input 
            attribute={{
                id:'contraseña',
                name: 'contraseña',
                type: 'password',
                placeholder: 'Ingrese su contraseña'
            }}
            handleChange={handleChange}
            param={passwordError}
            />

            {passwordError &&
            <label className="label-error">
                Contraseña invalida
            </label>
            }
            <button onClick={handleSubmit}>
                Ingresar
            </button>
            <div>
                <Label text='Quieres ser parte de la comunidad Kaizen?'/>
            <Link to='/createUser'>
            <Label text='Registrate aqui' />
            </Link>
            </div>
        </div>
    )
}

export default Login;