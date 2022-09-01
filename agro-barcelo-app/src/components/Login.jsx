import React, { useState } from 'react'
import './Login.css';

export const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    //User login info
    const database = [
        {
            username: 'useradmin',
            password: '1234'
        }
    ];
    const errors = {
        uname: 'Usuario invalido',
        pass: 'Contraseña invalida'
    };

    const handleSubmit = (event) => {
        //prevent page reload
        event.preventDefault();
    
        var { uname, pass } = document.forms[0];
    //find user info
    const userData = database.find((user) => user.username === uname.value)

    //compare user info
    if (userData) {
        if (userData.password !== pass.value) {
            setErrorMessages({ name: 'pass', message: errors.pass });
        } else {
            setIsSubmitted(true);
        }
    } else {
        //username not found
        setErrorMessages({ name: 'uname', message: errors, uname })
        alert('Error, ingrese los datos nuevamente')
    }
}
    // Generate JSX code for error message 
    const renderErrorMessage = (name) => {
        name === errorMessages.name && (
            <div className='error'>{errorMessages.message}</div>
        );
    }
    //JSX code for login form
    const renderForm = (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                    <label>Usuario</label>
                    <input type='text' name='uname' required />
                    {renderErrorMessage('uname')}
                </div>
                <div className='input-container'>
                    <label> Contraseña</label>
                    <input type='password' name='pass' required />
                    {renderErrorMessage('pass')}
                </div>
                <div className='button-container'>
                    <button onClick={handleSubmit}>Ingresar</button>
                </div>
            </form>
        </div>
    );
    return (
        <div className='app'>
            <div className='login-form'>
                {isSubmitted ? <div>Usuario ingresado correctamente </div> : renderForm}
            </div>
        </div>
    )
};

