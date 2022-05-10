import React, {useState} from "react";
import './CreateUser.css'
import Label from "../Login/components/Label/Label";
import Input from "../Login/components/Input/Input";
import Title from "../Login/components/Title/Title";
import { Navigate, Link } from 'react-router-dom';
import ErrorNotification from '../../commons/ErrorNotification';
import Button from '../../commons/RegularButton';
import logo from '../Home/img/logo.png'

const CreateUser = () => {
    const [ username, setUsername ] = useState('');
    const [ name, setName ] = useState('');
    const [ lastname, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordAgain, setPasswordAgain ] = useState('');
    const [ created, setCreated ] = useState(false)
    const [ errors, setErrors ] = useState({
        usernameError: false,
        nameError: false,
        lastNameError: false,
        emailError: false,
        passwordError: false,
        passwordAgainError: false
    })

    function handleChange(name, value) {
        switch(name) {
            case 'username':
                if(value < 1) {
                    setErrors({ ...errors, usernameError: true })
                } else {
                    setErrors({ ...errors, usernameError: false })
                    setUsername(value)
                }
                break;
            case 'name':
                if(value < 1) {
                    setErrors({ ...errors, nameError: true })
                } else {
                    setErrors({ ...errors, nameError: false })
                    setName(value)
                }
                break;
            case 'lastname':
                if(value < 1) {
                    setErrors({ ...errors, lastNameError: true })
                } else {
                    setErrors({ ...errors, lastNameError: false })
                    setLastName(value)
                }
                break;
            case 'email':
                if(value < 1) {
                    setErrors({ ...errors, emailError: true })
                } else {
                    setErrors({ ...errors, emailError: false })
                    setEmail(value)
                }
                break;
            case 'password':
                if(value < 1) {
                    setErrors({ ...errors, passwordError: true })
                } else {
                    setErrors({ ...errors, passwordError: false })
                    setPassword(value)
                }
                break;
            case 'passwordAgain':
                if(password.length < 5) {
                    setErrors({ ...errors, passwordError: true })
                } else if( password === value ) {
                    setErrors({
                        ...errors,
                        passwordError: false,
                        passwordAgainError: false })
                    setPasswordAgain(value)
                } else {
                    setErrors({ ...errors, passwordError: false, 
                                    passwordAgainError: true })
                }
                break;
            default:
                console.log('no hay valores.')
        }
    }

    let params =
        errors.usernameError === false &&
        errors.nameError === false &&
        errors.lastNameError === false &&
        errors.emailError === false &&
        errors.passwordError === false &&
        errors.passwordAgainError === false &&
        username.length > 1 &&
        name.length > 1 &&
        lastname.length > 1 &&
        password.length > 5 &&
        password === passwordAgain
    ;

    function handleSubmit() {
        const url = 'http://localhost:3000/login';
        const account = { 
            username: username,
            name: name,
            lastname: lastname,
            password: password,
            email: email
        };
//        const data = {
//            username: user,
//            password: password
//        };


        const config = {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(account) // body data type must match "Content-Type" header
        };
        console.log(config);
        if(account) {
            fetch(url, config)
                .then(response => {
                    if (response.ok) {
                        setCreated(true);
                        console.log('response.ok')
                        return response.json();
                    } else {
                        setErrors(true);
                        throw new Error('Something went wrong');
                    }
                })
                .then((responseJson) => {
                    console.log("responseJson::::::::::", responseJson);
                })
                .catch((error) => {
                    setCreated(false)
                    setErrors(true);
                    console.log(error)
                });
//            let ac = JSON.stringify(account)
  //          localStorage.setItem('account', ac)
    //        setTimeout(() => setCreated(true), 2000)
        }
    }

    let screenWidth = window.innerWidth;

    return (
        <>

        { created && <Navigate to='/' /> }

            <div className='CreateUserContainer'>
                <div className='BackgroundWeb' />
        <nav>
            <Link to= '/'>
            <img className="logo" src={logo} alt="" /> 
            </Link>     
            </nav>

                { screenWidth < 1030 && <Title text='Registro' /> }

                <div>
                    
                    <div>

                    { screenWidth > 1030 && <Title text='Registro' /> }

                        <Label text='Usuario' />
                        <Input 
                            attribute={{
                                name: 'username',
                                type: 'text',
                                ph: ''
                            }}
                            handleChange={handleChange}
                            param={errors.usernameError}
                        />
                        { errors.usernameError && 
                            <ErrorNotification text='Requerido.' /> }

                        <Label text='Nombre' />
                        <Input 
                            attribute={{
                                name: 'name',
                                type: 'text',
                                ph: ''
                            }}
                            handleChange={handleChange}
                            param={errors.nameError}
                        />
                        { errors.nameError && 
                            <ErrorNotification text='Requerido.' /> }

                        <Label text='Apellido' />
                        <Input 
                            attribute={{
                                name: 'lastname',
                                type: 'text',
                                ph: ''
                            }}
                            handleChange={handleChange}
                            param={errors.lastNameError}
                        />
                        { errors.lastNameError && 
                            <ErrorNotification text='Requerido.' /> }

                        <Label text='Email' />
                        <Input 
                            attribute={{
                                name: 'email',
                                type: 'email',
                                ph: ''
                            }}
                            handleChange={handleChange}
                            param={errors.emailError}
                        />
                        { errors.emailError && 
                            <ErrorNotification text='Requerido.' /> }

                        <Label text='Contraseña' />
                        <Input 
                            attribute={{
                                name: 'password',
                                type: 'password',
                                ph: ''
                            }}
                            handleChange={handleChange}
                            param={errors.passwordError}
                        />
                        
                        { errors.passwordError && 
                            <ErrorNotification text='Requerido.' /> }

                        <Label text='Repita la contraseña' />
                        <Input 
                            attribute={{
                                name: 'passwordAgain',
                                type: 'password',
                                ph: ''
                            }}
                            handleChange={handleChange}
                            param={errors.passwordAgainError}
                        />
                        { errors.passwordAgainError && 
                            <ErrorNotification text="Password don't match" /> }

                        <Button 
                            text='Registrate'
                            handleOnClick={handleSubmit}
                            param={params}
                        />

                        <div>
                            <Link to='/login'>
                                <Label text='Quiero ingresar' />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};

export default CreateUser;














