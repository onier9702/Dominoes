
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { creatingPlayerToUpdate } from '../actions/players';
import { auth } from '../firebase/firebase-config';
import { useForm } from '../hooks/useForm';
import '../styles/ModalEdit.css';

export const ModalEdit = ({player}) => {

    const dispatch = useDispatch();
    const { players } = useSelector(state => state.table);
    const {uid} = auth.currentUser;

    const [formValue, handleInputChange] = useForm({
        G: '',
        P: '',
    })

    const {G, P} = formValue;

    console.log(G, P);

    const handleEdit = (e) => {
        e.preventDefault();
        // console.log(e);

        // const ganados = (e.target[0].value);
        // const perdidos = (e.target[1].value);
        const Gan = parseInt(G);
        const Per = parseInt(P);
        console.log(Gan, Per);

        // console.log(G, P);

        if ( Gan < 0 || Per < 0 ) {
            return Swal.fire('Error', 'Debe introducir correctamente Ganados y Perdidos', 'error');
        };

        if ( !G || !P ) {
            return Swal.fire('Error', 'Debe introducir correctamente Ganados y Perdidos', 'error');
        }
        
        dispatch(creatingPlayerToUpdate(uid, player.id, player.name, Gan, Per, players));

    };

  return (
    <div className="cont-edit" >
        <div className="secondDiv" >
            <h5 >Editar a {player.name}</h5>
            
            <form onSubmit={handleEdit}>
                <div className="form-edit">
                    <label className="label1">G</label>
                    <input type="number" 
                           onChange={handleInputChange}
                           name="G"
                           value={G}
                    
                    />
                </div>
                <div className="form-edit">
                    <label className="label1">P</label>
                    <input type="number"
                           onChange={handleInputChange}
                           name="P"
                           value={P}
                    />
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
