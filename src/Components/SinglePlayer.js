
import React from 'react';

export const SinglePlayer = ({name, JJ, G, P, Dif, PorcientoG, PorcientoP}) => {


  return (
   
        <tr>
            <th scope="row">{name}</th>
            <td>{JJ}</td>
            <td>{G}</td>
            <td>{P}</td>
            <td>{Dif}</td>
            <td>{PorcientoG}</td>
            <td>{PorcientoP}</td>
        </tr>
  )
}
