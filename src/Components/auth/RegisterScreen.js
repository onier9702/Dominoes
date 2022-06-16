
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import Swal from 'sweetalert2';

import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import '../../styles/Login.css';
import { startRegister } from '../../actions/auth';

export const RegisterScreen = () => {


    const dispatch = useDispatch();
    const {msg} = useSelector(state => state.ui);

    const [formValue, handleInputChange] = useForm( {

        name: '',
        email: '',
        password: '',
        password2: '',
    } )

    const {name, email, password, password2 } = formValue;

    const registered = (e) => {
      e.preventDefault();
      console.log('click');

      if (formValid()){
        //   console.log('Form correct');
        dispatch(startRegister( name ,email, password));
      }
    }

    const formValid = () => {
        if(name.trim().length === 0 ){
            dispatch(setError('The name is empty'));
             return false;
        } else if (!(validator.isEmail(email))){
            dispatch(setError('Email is not valid'));
            return false;
        } else if (password !== password2 || password.length < 6){
            dispatch(setError('El Password debe de tener al menos 6 caracteres y coincidir'));
            return false;
        }
        dispatch(removeError());
        return true;
    }

    useEffect(() => {
        Swal.fire('Como funciona:',
            '!!! Con solo un registro le basta para crear su liga de dominoes y con ese correo y contrasena todos los jugadores pueden acceder o logearse !!!',
            'info'
        );
      
    }, [])
    
    
  return (

    <>  
       
            <div className="container">
                <h3 className="tittle">Register</h3>
                <form   className="content animate__animated animate__fadeIn animate__faster"
                        onSubmit={registered} 
                        >

                    {   
                        (msg) && <div className="auth__alert-error" > { msg } </div>   
                    }
                    <input  
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        autoComplete="off"
                        className="auth__input"
                        value={name}
                        onChange={handleInputChange}
                    />
                    <input  
                        type="text"
                        name="email"
                        placeholder="correo@gmail.com"
                        autoComplete="off"
                        className="auth__input"
                        value={email}
                        onChange={handleInputChange}
                    />
                
                    <input  
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="auth__input"
                        value={password}
                        onChange={handleInputChange}
                    />
                    <input  
                        type="password"
                        name="password2"
                        placeholder="Confirma"
                        className="auth__input"
                        value={password2}
                        onChange={handleInputChange}
                    />
                    <button 
                        type="button"
                        className="btn-login"
                        onClick={registered}
                        // disabled={true}
                    >Register</button>
                
                    <div className="link">
                    <Link to="/auth/" className="link">Go Login</Link>
                    </div>
                </form>             
            </div>
    </>
  )
}
