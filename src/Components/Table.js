
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLostGame, addWonGame } from '../actions/players';

import '../styles/Table.css';
import { TablePlayers } from './TablePlayers';

export const Table = () => {

    const dispatch = useDispatch();
    const {player} = useSelector(state => state.table);
    
    // console.log('Player Store: ' + player);
    let name;
    if ( player ) {
        name = (player[0]) ? player[0].name : player.name
        
        console.log(name);
    } else {
        name = 'Name';
    }

    const [frag, setFrag] = useState(false);

    // const handleWonGame = () => {
    //     dispatch(addWonGame(statistics,JJ,G,P));
        
    // }
    // const handleLostGame = () => {
    //     dispatch(addLostGame(statistics,JJ,G,P));
    // }

    const handleClickButtonAdd = () => {
        setFrag(!frag);
    }

  return (
    <div>
        <TablePlayers />

        <h5 style={{marginLeft:20}} >Seleccione Jugador primero</h5>

        <button className="btn-primary" 
                onClick={handleClickButtonAdd}

        >Agregar Juego</button>
        {
            (frag) &&   <div style={{display:'flex', flexDirection:'column',padding:20}}>
                            {/* {
                                (player.length > 0) ? <h5 style={{marginBottom:20}}>name</h5> : <p>Escoga jugador</p>
                            } */}
                            <h5 style={{marginBottom:20}}>{name}</h5>
                            <div>
                                <button className="button-table" 
                                        // onClick={handleWonGame} 
                                >Agregar Juego Ganado</button>
                                <button className="button-table" 
                                        // onClick={handleLostGame} 
                                >Agregar Juego Perdido</button>
                            </div>
                        </div>
        }
            
    </div>
  )
}




                {/* <div className="table">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Jugador</th>
                                <th scope="col">JJ</th>
                                <th scope="col">G</th>
                                <th scope="col">P</th>
                                <th scope="col">DIF</th>
                                <th scope="col">%G</th>
                                <th scope="col">%P</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{name}</th>
                                <td>{JJ}</td>
                                <td>{G}</td>
                                <td>{P}</td>
                                <td>{Dif}</td>
                                <td>{PorcientoG}</td>
                                <td>{PorcientoP}</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table> */}
                    