import React, { useState } from "react";
import { Redirect, Link } from 'react-router-dom';
import './Login.css'
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";
import Button from '../../commons/RegularButton';
import ModalError from '../../commons/ModalError'

const Login = () => {

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState(false);
    const [ isLogin, setIsLogin ] = useState(false); //usar despues para el login
    const [ hasError, setHasError ] = useState(false);

    const open = true;

    const [ errors, setErrors ] = useState({
        usernameError: false,
        passwordError: false
    })

    function handleChange(name, value) {
        switch(name) {
            case 'username':
                setErrors({ usernameError: false, passwordError: false });
                setHasError(false);
                setUser(value);
                break;
            case 'password':
                setErrors({ usernameError: false, passwordError: false });
                setHasError(false);
                setPassword(value);
                break;
            default: 
            console.log('no hay valores')
        }
    }

    function ifMatch(param) {
        if(param.user.length > 0 && param.password.length > 0){
            if(param.user === 'Ruben' && param.password === '123456'){
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
            <Title text='Bienvenido!'/>
            { hasError && 
            <ModalError
            title='An error occurred!'
            text="User or password doesn't exist."
            /* handleOnClick={clearErrorModal} */ //fijarse de cambiar los estilos
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
            <Link to='/createUser'style={{ color: '#734488' }}>
            <Label text='I want to sign up' />
            </Link>
            </div>
        </div>
    )
}

export default Login;