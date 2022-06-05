
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userClickPlayer } from '../actions/players';

export const SinglePlayer = ({name, JJ, G, P, Dif, PorcientoG, PorcientoP}) => {

  const dispatch = useDispatch();
  const {players} = useSelector(state => state.table);


  // const newNote = [];
  // list.map( (elem) => newNote.push(elem) );

  const handleClick = (e) => {
    e.preventDefault();
    const neccesaryName = e.target.innerText;
    dispatch( userClickPlayer(players, neccesaryName) );
  };

  return (
   
        <tr>
            <th onClick={handleClick} scope="row">{name}</th>
            <td>{JJ}</td>
            <td>{G}</td>
            <td>{P}</td>
            <td>{Dif}</td>
            <td>{PorcientoG.toFixed(2)}</td>
            <td>{PorcientoP.toFixed(2)}</td>
        </tr>
  )
}
