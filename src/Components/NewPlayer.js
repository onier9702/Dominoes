
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPlayer } from '../actions/players';
import { useForm } from '../hooks/useForm';

import '../styles/NewPlayer.css';

export const NewPlayer = () => {

  const dispatch = useDispatch();
  const {uid} = useSelector(state => state.auth);

  const [formValues, handleInputChange, reset] = useForm({
    name: '',
  });

  const {name} = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch( addNewPlayer(uid, name) );
    reset();
  };


    
  return (
    <div className="new-player">
        <h2>Nuevo Jugador</h2>
        <hr />

        <p>Aqui agrege un nuevo jugador ...</p>
        <form onSubmit={handleSubmit}>
          <input
              type="text" 
              placeholder="Escriba su Nombre"
              autoComplete="off"
              autoCapitalize="on"
              name="name"
              onChange={handleInputChange}
          />
          <button 
                  type="submit"
                  className="btn-primary"
          >Agregar</button>
        </form>
    </div>
  )
}
