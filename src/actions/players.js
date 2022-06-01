
// Actions of each player

import { types } from "../types/types"


export const addNewPlayer = (name, player) => {

    return async(dispatch) => {

        

    };

};


export const addWonGame = ( player, JJ, G, P ) => ({

    type: types.playerWon,
    payload: {
    
        ...player,
        JJ,
        G,
        P,
        
    }
})

export const addLostGame = ( player, JJ, G, P ) => ({

    type: types.playerLost,
    payload: {
        
        ...player,
        JJ,
        G,
        P,
    
    }
});

export const loadPlayers = (players) => ({

    type: types.playersLoad,
    payload: players,
})




