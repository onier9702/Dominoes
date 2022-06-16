
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { addNewPlayer } from '../actions/players';
import { useForm } from '../hooks/useForm';

import '../styles/NewPlayer.css';

export const NewPlayer = () => {

  const dispatch = useDispatch();
  // const {uid} = useSelector(state => state.auth);
  const listPlayers = useSelector( state => state.table.players );

  const [formValues, handleInputChange, reset] = useForm({
    name: '',
  });

  const {name} = formValues;
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if ( name.trim().length < 2 ){
      Swal.fire('Error','Debe contener al menos dos letras','info');
    } else {
      dispatch( addNewPlayer(name,listPlayers) );
      reset();
    }
    
    
  };
  

    
  return (
    <div className="new-player">
        <h2>Nuevo Jugador</h2>
        <hr />

        <form onSubmit={handleSubmit}>
          <input
              type="text" 
              placeholder="Su Nombre"
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
