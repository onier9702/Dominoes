
import React from 'react';
import { useSelector } from 'react-redux';

import '../styles/Ranking.css';

import { auth } from '../firebase/firebase-config';
import { RankingPlayer } from './RankingPlayer';

export const Ranking = () => {

    // const dispatch = useDispatch();
    const {players} = useSelector( state => state.table );
    // const {uid} = auth.currentUser;

    let minAmount = 0;
    const iterableList = [];
    players.map( player => iterableList.push(player) );

    for( let one of iterableList) {

      if (one.JJ > minAmount){
        minAmount = one.JJ;
      }

    }

    const listOf = iterableList.filter( player => player.JJ >= (minAmount/2) );

    const len = listOf.length;
    
    const test = [];
    for (let i = 0; i < len; i++) {
      test.push(listOf[i]);
    };

    // console.table(test);
    let array = test.sort( (s1, s2)=> s2.Dif - s1.Dif  );

    for (let i = 1; i < len; i++) {

      if ( array[i-1].Dif === array[i].Dif ){

        if (array[i-1].PorcientoG < array[i].PorcientoG){
          let borrow = array[i-1];
          array[i-1] = array[i];
          array[i] = borrow;
        }
      }
    };

    console.log(array);
    // let defin = array.sort( (s1, s2) => s2.PorcientoG - s1.PorcientoG );

    // console.table(array);
  


  return (

    <div className="ranking">
        <h2 >Ranking</h2>
        <hr></hr>

        <div className="motivation" >
          <h5 >El Tanke de los Tankes es </h5>
          {
            (array[0]) && <h4 >{array[0].name}</h4>
          }
          
        </div>

        <table class="table">
          <thead>
            <tr>
              <th style={{color:'blue'}} scope="col">#</th>
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
              array.map( (player, index ) => (
                  <RankingPlayer key={player.id} index={index} {...player} />
              ) )
            }
          </tbody>
        </table>

        <div className="information">
          <h4>NOTA</h4>
          <p> !!! Para que un jugador pueda rankear debe de haber jugado 
              al menos la mitad de los partidos del jugador con mas 
              juegos jugados !!!
          </p>
        </div>

    </div> 
  )
}
