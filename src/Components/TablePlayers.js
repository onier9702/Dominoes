
import React from 'react';
import { useSelector } from 'react-redux';
// import { onAuthStateChanged } from 'firebase/auth';

// import { auth } from '../firebase/firebase-config';

import { SinglePlayer } from './SinglePlayer';

export const TablePlayers = () => {

  const {players} = useSelector(state => state.table);

  // const playersArray = [];
  // listOfPlayers.map(player => playersArray.push(player)); 

  
  // console.log('Lista de jugadores: ' + listOfPlayers);
  // console.log(typeof listOfPlayers);
  // console.log(playersArray);

  // const [isready, setIsready] = useState(false);
  // const [checking, setChecking] = useState(false);

  
  // useEffect(() => {
    
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // setIsready(true);
  //       (listOfPlayers) ? setChecking(true) : setChecking(false);
        
  //     } else {
  //       // setIsready(false);

  //     }
  //   });

  // }, [setChecking])

  // if (isready) {
  //   return <h3>You are not logged in yet </h3>
  // }

  // console.log('List of Players: ' + players);
  
  return (

      <div className="table1">
        <table className="table">
            <thead>
                <tr>
                    <th style={{color:'blue'}} scope="col">Jugador</th>
                    <th style={{color:'blue'}} scope="col">JJ</th>
                    <th style={{color:'blue'}} scope="col">G</th>
                    <th style={{color:'blue'}} scope="col">P</th>
                    <th style={{color:'blue'}} scope="col">DIF</th>
                    <th style={{color:'blue'}} scope="col">%G</th>
                    <th style={{color:'blue'}} scope="col">%P</th>

                </tr>
            </thead>
            <tbody>

              {
                players.map(element => (
                  <SinglePlayer 
                            key={element.id} 
                            {...element} 
                  />)
                )
              }

              { 

                // (checking) && 
                // listOfPlayers.map( (player) => (
                //   <SinglePlayer 
                //             key={player.id}
                //             {...player}
                //   />
                // ))
              }
            </tbody>
        </table>
      </div>
    
  )
}
