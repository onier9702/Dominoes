
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

    const xxx = (player[0]) ? player[0] : player;
    
    // const index = players.indexOf(player[0] || player);
    // console.log(index);

    // console.log(xxx.id, xxx.JJ, xxx.G, xxx.P, xxx.PorcientoG, xxx.PorcientoP, xxxDif, xxx.name);
  

    let name;
    if ( player ) {
        name = (player[0]) ? player[0].name : player.name
        
        // console.log(name);
    } else {
        name = 'Name';
    }


    const handleWonGame = (e) => {
        e.preventDefault();
        if (player[0] || player.name) {
            dispatch(addWonGame( player[0] || player ));
            setTimeout(() => {
                dispatch(masterPiece( xxx.id, players, player));
            }, 2500);
        } else {
            Swal.fire('Recuerde','Debe seleccionar Jugador', 'warning');
        }
        
    }
    const handleLostGame = (e) => {
        e.preventDefault();
        if (player[0] || player.name) {
            dispatch(addLostGame( player[0] || player ));
            dispatch(masterPiece( xxx.id, players, player));
        } else {
            Swal.fire('Recuerde','Debe seleccionar Jugador', 'warning');
        }
    }

  

  return (
    <div>
        <TablePlayers />

        <h5 style={{marginLeft:20}} >Seleccione Jugador en la Tabla</h5>
        
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
  )
}

                    