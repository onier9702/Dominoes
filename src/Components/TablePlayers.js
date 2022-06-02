
import React from 'react';
import { useSelector } from 'react-redux';
import { SinglePlayer } from './SinglePlayer';

export const TablePlayers = () => {

  const {players} = useSelector(state => state.table);
    
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
              {
                players.map( (player) => (
                  <SinglePlayer 
                            key={player.id}
                            {...player}
                  />
                ))
              }
            </tbody>
        </table>
      </div>
    
  )
}
