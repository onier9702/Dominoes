
import Swal from 'sweetalert2';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore'; 

import {auth, db} from '../firebase/firebase-config';
import { types } from "../types/types";
import { loadPlayersFromFireStore } from '../helpers/loadPlayers';




export const addNewPlayer = ( name, list) => {

    return async(dispatch) => {
        
        
        Swal.fire( {
            title: 'Agregando...',
            text: 'Please wait...',
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading();
            }
          } );

        const {uid} = auth.currentUser;

        const newPlayer = {
            
            name,
            JJ: 0,
            G: 0,
            P: 0,
            Dif: 0,
            PorcientoG: 0.0,
            PorcientoP: 0.0,
        };

        //Add a new document with a generated id.
        const docRef = await addDoc(collection(db, uid), newPlayer);

        let id = docRef.id;

        const playerWithId = {
            id,
            name,
            JJ: 0,
            G: 0,
            P: 0,
            Dif: 0,
            PorcientoG: 0.0,
            PorcientoP: 0.0,
        };
        const otherList = [];
        list.map( player => otherList.push(player));

        otherList.push(playerWithId);
        console.log(otherList);
        dispatch(addingNewPlayer(playerWithId,otherList) );
        dispatch( updatingPlayer(uid, id, playerWithId) );
        Swal.close();

    };

};

export const addingNewPlayer = ( player, players) => ({

    type: types.playerAdded,
    payload: { 
        player,
        players,
    } 


});

export const updatingPlayer = (uid, id, player) => {

    return async(dispatch) => {


        const playerRef = doc(db, uid, id);

        await updateDoc(playerRef, player);

    };

};

// Here one player was chosen by user click event
export const userClickPlayer = (listPlayers ,name) => {

    return (dispatch) => {
        
        const ok = listPlayers.filter( player => player.name === name );
        console.log(ok);

        dispatch( rowPlayerChosen(ok) );
    }
}

export const rowPlayerChosen = (player) => ({

    type: types.playerChosen,
    payload: player,
})

// export const addWonGame = ( player, JJ, G, P ) => ({

//     type: types.playerWon,
//     payload: {
    
//         ...player,
//         JJ,
//         G,
//         P,
        
//     }
// })

// export const addLostGame = ( player, JJ, G, P ) => ({

//     type: types.playerLost,
//     payload: {
        
//         ...player,
//         JJ,
//         G,
//         P,
    
//     }
// });


export const loadingPlayersList = (uid) => {

    return async(dispatch) => {

        const list = await loadPlayersFromFireStore(uid);
        console.log(list);
        dispatch( puttingPlayersOnStore(list) );

    };

};

export const puttingPlayersOnStore = (players) => ({

    type: types.playersLoad,
    payload: players,

});

