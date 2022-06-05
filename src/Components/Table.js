
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { addLostGame, addWonGame, masterPiece } from '../actions/players';

import '../styles/Table.css';
import { TablePlayers } from './TablePlayers';

export const Table = () => {

    const dispatch = useDispatch();
    const {players, player} = useSelector(state => state.table);
    // const {players} = useSelector(state => state.table);

    const {id} = player;
    

    let name;
    if ( player ) {
        name = player.name;
        
    } else {
        name = 'Name';
    }

    const handleWonGame = (e) => {
        e.preventDefault();
        if ( player.name) {
            dispatch(addWonGame( player ));
            dispatch(masterPiece( id, players, player, 'G'));
            
        } else {
            Swal.fire('Recuerde','Debe seleccionar Jugador', 'warning');
        }
        
    }


    const handleLostGame = (e) => {
        e.preventDefault();
        if ( player.name ) {
            dispatch(addLostGame( player ));
            dispatch(masterPiece( id, players, player, 'P'));
        } else {
            Swal.fire('Recuerde','Debe seleccionar Jugador', 'warning');
        }
    }

  

  return (
    <div>
        <TablePlayers />

        <div className="readme" >
            <h4 >Para Modificar</h4>
            <h5 >Seleccione Jugador en la Tabla</h5>

        
            <div style={{display:'flex', flexDirection:'column',padding:20}}>
                <h5 style={{marginBottom:20}}>{name}</h5>
                <div>
                    <button className="button-table" 
                            onClick={handleWonGame} 
                            >Agregar Juego Ganado a {name}</button>
                    <button className="button-table" 
                            onClick={handleLostGame} 
                            >Agregar Juego Perdido a {name} </button>
                </div>
            </div>
        </div>
        
            
    </div>
  )
}

                    