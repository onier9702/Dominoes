
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import '../../styles/Login.css';
import { startRegister } from '../../actions/auth';

export const RegisterScreen = () => {


    const dispatch = useDispatch();
    const {msg} = useSelector(state => state.ui);

    const [formValue, handleInputChange] = useForm( {

        name: 'Nombre',
        email: 'email@gmail.com',
        password: 'Contrasena',
        password2: 'Contrasena',
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
        } else if (password !== password2 || password.length < 5){
            dispatch(setError('Password should contains at least 5 characters and match each other'));
            return false;
        }
        dispatch(removeError());
        return true;
    }

  return (

    <>  
        <div className="login">
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
                        placeholder="Name"
                        autoComplete="off"
                        className="auth__input"
                        value={name}
                        onChange={handleInputChange}
                    />
                    <input  
                        type="text"
                        name="email"
                        placeholder="Email"
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
                        placeholder="Confirm"
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
        </div>
    </>
  )
}
