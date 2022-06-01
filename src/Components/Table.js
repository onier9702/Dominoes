
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLostGame, addWonGame } from '../actions/players';

import '../styles/Table.css';
/* const initialState = {

    players: [],
    player: {
        name: '',
        JJ: 0,
        G: 0,
        P: 0,
        Dif: 0,
        PorcientoG: 0,
        PorcientoP: 0,
    }
}  */
export const Table = () => {

    const dispatch = useDispatch();
    const statistics = useSelector(state => state.table.player);
    const {name, JJ, G, P, Dif, PorcientoG, PorcientoP} = statistics;
    // console.log(statistics);
    // console.log(name, JJ, G, P, Dif, PorcientoG, PorcientoP);

    const [frag, setFrag] = useState(false);




    const handleWonGame = () => {
        dispatch(addWonGame(statistics,JJ,G,P));
        
    }
    const handleLostGame = () => {
        dispatch(addLostGame(statistics,JJ,G,P));
    }

    const handleClickButtonAdd = () => {
        setFrag(!frag);
    }

    

  return (
    <div className="table">
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
                {/* <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr> */}
            </tbody>
        </table>
        
        <button className="btn-primary" onClick={handleClickButtonAdd}>Add Juego</button>

        {
            (frag) &&   <div>
                            <button className="button-table" onClick={handleWonGame} >Agregar Juego Ganado</button>
                            <button className="button-table" onClick={handleLostGame} >Agregar Juego Perdido</button>
                        </div>
        }
            
    </div>
  )
}
