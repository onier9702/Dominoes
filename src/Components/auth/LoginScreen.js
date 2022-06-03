
import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import { useForm } from '../../hooks/useForm';

import '../../styles/Login.css';
import { startLogin } from '../../actions/auth';

export const LoginScreen = () => {

  const dispatch = useDispatch();
  const {name} = useSelector( state => state.auth );
  
  const [formValue, handleInputChange] = useForm( {
    email: 'reino@gmail.com',
    password: '123456',
  } )

  const { email, password } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startLogin(name ,email, password));
  }

  return (
    <>
      <div className="login">
        <div className="container">

          <h3 className="auth__tittle">Login</h3>
    
          <form className="content animate__animated animate__fadeIn animate__faster" 
                onSubmit={handleSubmit}
          >
    
              <input  
                      type="text"
                      name="email"
                      placeholder="Email"
                      autoComplete="off"
                      // className="auth__input"
                      value={email}
                      onChange={handleInputChange}

    
              />
  
              <input  
                      type="password"
                      name="password"
                      placeholder="Password"
                      // className="auth__input"
                      value={password}
                      onChange={handleInputChange}

              />
              <button 
                      type="submit"
                      className="btn-login"
                      onClick={handleSubmit}
                      // disabled= {loading}
              >Login</button>
  
              <div className="link">
                <Link to="/auth/register" className="link">Register here</Link>
              </div>
          </form>
    
        </div>
      </div>
    </>
  )
}
