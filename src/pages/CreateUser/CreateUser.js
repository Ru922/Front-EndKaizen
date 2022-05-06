import React, {useState} from "react";
import './CreateUser.css'
import Label from "../Login/components/Label/Label";
import Input from "../Login/components/Input/Input";
import Title from "../Login/components/Title/Title";
import { Redirect, Link } from 'react-router-dom';
import ErrorNotification from '../../commons/ErrorNotification';
import Button from '../../commons/RegularButton';



const CreateUser = () => {


    const [ username, setUsername ] = useState('');
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordAgain, setPasswordAgain ] = useState('');

    const [ created, setCreated ] = useState(false)

    const [ errors, setErrors ] = useState({
        usernameError: false,
        firstNameError: false,
        lastNameError: false,
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
            case 'firstName':
                if(value < 1) {
                    setErrors({ ...errors, firstNameError: true })
                } else {
                    setErrors({ ...errors, firstNameError: false })
                    setFirstName(value)
                }
                break;
            case 'lastName':
                if(value < 1) {
                    setErrors({ ...errors, lastNameError: true })
                } else {
                    setErrors({ ...errors, lastNameError: false })
                    setLastName(value)
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
                if(password.length < 6) {
                    setErrors({ ...errors, passwordError: true })
                } else if( password === value ) {
                    setErrors({ ...errors, passwordError: false,
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
        errors.firstNameError === false &&
        errors.lastNameError === false &&
        errors.passwordError === false &&
        errors.passwordAgainError === false &&
        username.length > 1 &&
        firstName.length > 1 &&
        lastName.length > 1 &&
        password.length > 5 &&
        password === passwordAgain
    ;

    function handleSubmit() {
        let account = { username, firstName, lastName, password }
        if(account) {
            let ac = JSON.stringify(account)
            localStorage.setItem('account', ac)
            setTimeout(() => setCreated(true), 2000)
        }
    }

    let open = true;

    let screenWidth = window.innerWidth;

    return (
        <>

        { created && <Redirect to='/home' /> }

            <div className='CreateUserContainer'>
                <div className='BackgroundWeb' />

                { screenWidth < 1030 && <Title text='(new user)' /> }

                <div className='createUserContent'>
                    
                    <div className='formCreateUser'>

                    { screenWidth > 1030 && <Title text='(new user)' /> }

                        <Label text='User' />
                        <Input 
                            attribute={{
                                name: 'username',
                                inputType: 'text',
                                ph: ''
                            }}
                            handleChange={handleChange}
                            param={errors.usernameError}
                        />
                        { errors.usernameError && 
                            <ErrorNotification text='Required.' /> }

                        <Label text='First name' />
                        <Input 
                            attribute={{
                                name: 'firstName',
                                inputType: 'text',
                                ph: ''
                            }}
                            handleChange={handleChange}
                            param={errors.firstNameError}
                        />
                        { errors.firstNameError && 
                            <ErrorNotification text='Required.' /> }

                        <Label text='Last name' />
                        <Input 
                            attribute={{
                                name: 'lastName',
                                inputType: 'text',
                                ph: ''
                            }}
                            handleChange={handleChange}
                            param={errors.lastNameError}
                        />
                        { errors.lastNameError && 
                            <ErrorNotification text='Required.' /> }

                        <Label text='Password' />
                        <Input 
                            attribute={{
                                name: 'password',
                                inputType: 'password',
                                ph: ''
                            }}
                            handleChange={handleChange}
                            param={errors.passwordError}
                        />
                        { errors.passwordError && 
                            <ErrorNotification text='min. 6 characters' /> }

                        <Label text='Repeat password' />
                        <Input 
                            attribute={{
                                name: 'passwordAgain',
                                inputType: 'password',
                                ph: ''
                            }}
                            handleChange={handleChange}
                            param={errors.passwordAgainError}
                        />
                        { errors.passwordAgainError && 
                            <ErrorNotification text="Password don't match" /> }

                        <Button 
                            text='Sign Up'
                            handleOnClick={handleSubmit}
                            param={params}
                        />

                        <div 
                        style={{ display: 'flex', 
                        justifyContent: 'center',
                        alignItems: 'center' 
                        }}>
                            <Link 
                            to='/'
                            style={{ color: '#734488' }}
                            >
                                <Label 
                                text='I want to sign in' />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};

export default CreateUser;














