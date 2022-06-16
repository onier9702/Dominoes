
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { addLostGame, addWonGame, deletePlayer, masterPiece, uploadingGame } from '../actions/players';
import { auth } from '../firebase/firebase-config';

import '../styles/Table.css';
import { TablePlayers } from './TablePlayers';

export const Table = () => {

    const dispatch = useDispatch();
    const {players, player} = useSelector(state => state.table);

    const {id} = player;
    const {uid} = auth.currentUser;

    let name;
    if ( player ) {
        name = player.name;
        
    } else {
        name = 'Name';
    };

    const handleWonGame = (e) => {
        e.preventDefault();
        if ( player.name) {
            dispatch(addWonGame( player ));
            dispatch(masterPiece( id, players, player, 'G'));
            dispatch( uploadingGame(uid, id, player, 'G') );
            
        } else {
            Swal.fire('Recuerde','Debe seleccionar Jugador', 'warning');
        };
        
    };


    const handleLostGame = (e) => {
        e.preventDefault();
        if ( player.name ) {
            dispatch(addLostGame( player ));
            dispatch(masterPiece( id, players, player, 'P'));
            dispatch( uploadingGame(uid, id, player, 'P' ) );
        } else {
            Swal.fire('Recuerde','Debe seleccionar Jugador', 'warning');
        };
    };

    const handleDelete = () => {
        dispatch( deletePlayer(uid, id) );

    };

  

  return (
    <div>
        <TablePlayers />

        <div className="readme" >
            <h4 >Para Modificar</h4>
            <h5 >Seleccione Jugador en la Tabla</h5>

        
            <div style={{display:'flex', flexDirection:'column',padding:20}}>
                {(name) && <h5 style={{marginBottom:20}}>{name}</h5> }
                <div>
                    <button className="button-table" 
                            onClick={handleWonGame} 
                            >+ Ganado</button>
                    <button className="button-table" 
                            onClick={handleLostGame} 
                            >+ Perdido</button>
                </div>
            </div>
        </div>
        {
            (player.id) && <button 
                                className="btn btn-danger"
                                onClick={handleDelete}
                            >
                                {`Eliminar a ${name}`}
                            </button>
        }
        
        
            
    </div>
  )
}

                    