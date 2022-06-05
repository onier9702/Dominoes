
import React from 'react';


export const RankingPlayer = ({ index, name, JJ, G, P, Dif, PorcientoG, PorcientoP }) => {

   const newIndex = index + 1 ;
   
  //  console.log(newIndex);

  return (
    <tr>
        {
            (newIndex !== NaN) && <td>{newIndex}</td>
        }
        <td>{name}</td>
        <td>{JJ}</td>
        <td>{G}</td>
        <td>{P}</td>
        <td>{Dif}</td>
        {(PorcientoG) && <td>{PorcientoG.toFixed(2)}</td>}
        {(PorcientoP) && <td>{PorcientoP.toFixed(2)}</td>}
    </tr>
  )
}
