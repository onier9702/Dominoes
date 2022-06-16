
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { creatingPlayerToUpdate } from '../actions/players';
import { auth } from '../firebase/firebase-config';
import '../styles/Edit.css';

export const ModalEdit = ({player}) => {

    const dispatch = useDispatch();
    const { players } = useSelector(state => state.table);
    const {uid} = auth.currentUser;

    const handleEdit = (e) => {
        e.preventDefault();

        const ganados = (e.target[0].value);
        const perdidos = (e.target[1].value);
        const G = parseInt(e.target[0].value);
        const P = parseInt(e.target[1].value);

        console.log(G, P);

        if ( G < 0 || P < 0 ) {
            return Swal.fire('Error', 'Debe introducir correctamente Ganados y Perdidos', 'error');
        };

        if ( !ganados || !perdidos ) {
            return Swal.fire('Error', 'Debe introducir correctamente Ganados y Perdidos', 'error');
        }
        
        dispatch(creatingPlayerToUpdate(uid, player.id, player.name, G, P, players));

    };

  return (
    <div className="cont-edit" >
        <div className="secondDiv" >
            <h5 >Editar a {player.name}</h5>
            
            <form onSubmit={handleEdit}>
                <div className="form-edit">
                    <label className="label1">G</label>
                    <input type="number" />
                </div>
                <div className="form-edit">
                    <label className="label1">P</label>
                    <input type="number" />
                </div>
            
                <button className="guardar-cambios" 
                        type="submit"
                        onSubmit={handleEdit} 
                        >Guardar Cambios</button>
            </form>
        </div>    
    </div>
  )
}
