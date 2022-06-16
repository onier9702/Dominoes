
import Swal from 'sweetalert2';
import { collection, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'; 

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
        // console.log('List with player added ' + otherList);
        dispatch(addingNewPlayer(playerWithId,otherList) );
        setTimeout(() => {
            dispatch( updatingPlayer(uid, id, playerWithId) );
        }, 1000);
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

        Swal.fire( {
            title: 'Guardando...',
            text: 'Please wait...',
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading();
            }
                      } );
        const playerRef = doc(db, uid, id);

        await updateDoc(playerRef, player);
        Swal.close();
        
    };

};

export const uploadingGame = (uid, id, player, condition) => {

    return async(dispatch) => {

        Swal.fire( {
            title: 'Guardando...',
            text: 'Please wait...',
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading();
            }
        } );

        const notMutatingPlayer = {...player};

        let newPlayer;
        if (condition === 'G'){
            newPlayer = {
                ...notMutatingPlayer,
                JJ: notMutatingPlayer.JJ +1,
                G: notMutatingPlayer.G +1,
                Dif: (notMutatingPlayer.G +1) - notMutatingPlayer.P,
                PorcientoG: ((notMutatingPlayer.G +1)/ (notMutatingPlayer.JJ +1)) * 100,
                PorcientoP: (notMutatingPlayer.P / (notMutatingPlayer.JJ +1)) * 100,
            }
        } else {
            newPlayer = {
                ...notMutatingPlayer,
                JJ: notMutatingPlayer.JJ +1,
                P: notMutatingPlayer.P +1,
                Dif: notMutatingPlayer.G - (notMutatingPlayer.P + 1),
                PorcientoG: (notMutatingPlayer.G / (notMutatingPlayer.JJ +1)) * 100,
                PorcientoP: ((notMutatingPlayer.P + 1) / (notMutatingPlayer.JJ +1)) * 100,
            }
        }

        // Updating player on FireStore
        const playerRef = doc(db, uid, id);
        await updateDoc(playerRef, newPlayer);
        Swal.close();
    };
} 

// Here one player was chosen by user click event
export const userClickPlayer = (listPlayers ,name) => {

    return (dispatch) => {
        // console.log('listPLayers: ' + listPlayers);
        const ok = listPlayers.filter( player => player.name === name );
        // console.log('ok: ' + {ok});
        // console.log(ok.id);
        dispatch( rowPlayerChosen(ok[0]) );
    }
}

export const rowPlayerChosen = (player) => ({

    type: types.playerChosen,
    payload: player,
})

export const addWonGame = ( player ) => ({

    type: types.playerWon,
    payload: player,
})

export const addLostGame = ( player ) => ({

    type: types.playerLost,
    payload: player,
});

export const masterPiece = ( id, players, player, condition ) => {

    return (dispatch) => {
    
        const index = players.findIndex( book => book.id === id );
        
        const newList = [];
        players.map( player => newList.push(player) );
        
        if (  index !== -1 ) {
            if (condition === 'G'){
                newList[index] = {
                    ...player,
                    JJ: player.JJ + 1,
                    G: player.G + 1,
                    Dif: ((player.G + 1) - player.P),
                    PorcientoG: ((player.G + 1) / (player.JJ + 1)) * 100,
                    PorcientoP: (player.P / (player.JJ + 1)) * 100,
                };
            } else {
                newList[index] = {
                    ...player,
                    JJ: player.JJ + 1,
                    P: player.P + 1,
                    Dif: (player.G  - (player.P + 1)),
                    PorcientoG: (player.G / (player.JJ + 1)) * 100,
                    PorcientoP: ((player.P + 1) / (player.JJ + 1)) * 100,
                };
            }
        }
        dispatch(puttingPlayersOnStore(newList));
    };

};



export const loadingPlayersList = (uid) => {

    return async(dispatch) => {

        const list = await loadPlayersFromFireStore(uid);
        dispatch( puttingPlayersOnStore(list) );

    };

};

export const puttingPlayersOnStore = (players) => ({

    type: types.playersLoad,
    payload: players,

});

export const deletePlayer = (uid, id) => {

    return async(dispatch) => {

        Swal.fire( {
            title: 'Borrando...',
            text: 'Please wait...',
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading();
            }
        } );

        await deleteDoc(doc(db, uid, id));
        dispatch( deletePlayerFromStore() );

        Swal.close();

    };
};

export const deletePlayerFromStore = () => ({
    type: types.playerDelete,
})

// export const savingJournal = ( players ) => {

//     return async(dispatch) => {

//         Swal.fire( {
//             title: 'Guardando...',
//             text: 'Please wait...',
//             allowOutsideClick: false,
//             didOpen: () => {
//               Swal.showLoading();
//             }
//           } );

//         const {uid} = auth.currentUser;
//         const iterableList = [];
//         players.forEach( player => iterableList.push(player) );

//         iterableList.forEach( player => {

//             const playerRef = doc(db, uid, player.id);
//             await updateDoc(playerRef, player);
//         }  )

//         Swal.close();

//     }
// };