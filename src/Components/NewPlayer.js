
import React from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/NewPlayer.css';

export const NewPlayer = () => {


  const [formValues, handleInputChange, reset] = useForm({
    name: '',
  });

  const {name} = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('click');

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
