
import Swal from 'sweetalert2';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SinglePlayer } from './SinglePlayer';

export const TablePlayers = () => {

  const {players} = useSelector(state => state.table);

  useEffect(() => {
  
    Swal.fire( {
      title: 'Para Agregar juego a un Jugador',
      text: 'Usted debe seleccionar haciendo Click en un jugador de la Tabla y despues Agregar Juego',
      allowOutsideClick: false,
      
    } )
      
    
  }, [])
  
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
