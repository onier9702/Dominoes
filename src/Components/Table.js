
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { addLostGame, addWonGame, deletePlayer, masterPiece, uploadingGame } from '../actions/players';
import { auth } from '../firebase/firebase-config';

import '../styles/Table.css';
// import { ModalAdd } from './ModalAdd';
import { ModalEdit } from './ModalEdit';
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

        {
            (!player.id) && <h4 style={{marginLeft: 10, color:'blue'}} >Seleccione un Jugador</h4>
        }

        <div className="editing-zone" >
            
            {
                (player.id) && 
                                <div className="readme" >
                                    <h4>Agregar Juego</h4>
                                    <div className="cuadro">
                                        {(name) && <h5>{name}</h5> }
                                        <div className="cuadro-buttons">
                                            <button className="button-table" 
                                                    onClick={handleWonGame} 
                                                    >+ Ganado</button>
                                            <button className="button-table" 
                                                    onClick={handleLostGame} 
                                                    >+ Perdido</button>
                                        </div>
                                    </div>
                                </div>
            }

            {
                (player.id) && <ModalEdit key={player.id} player={player}/>
            }
        </div>

        {
            (player.id) && <button 
                                className="btn btn-danger"
                                onClick={handleDelete}
                            >
                                <i className="fas fa-trash" >  {name}</i>
                            </button>
        }        
            
    </div>
  )
}

                    