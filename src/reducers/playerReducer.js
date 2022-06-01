import { types } from "../types/types";


const initialState = {

    players: [],
    player: {
        name: '',
        JJ: 0,
        G: 0,
        P: 0,
        Dif: 0,
        PorcientoG: 0.0,
        PorcientoP: 0.0,
    }
} 

export const playerReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.playerWon:
            return { 
                ...state,
                player: {
                    JJ: action.payload.JJ + 1,
                    G: action.payload.G + 1,
                    P: action.payload.P,
                    Dif: ((action.payload.G + 1) - action.payload.P),
                    PorcientoG: ((action.payload.G + 1) / (action.payload.JJ + 1)) * 100,
                    PorcientoP: (action.payload.P / (action.payload.JJ + 1)) * 100,
                }
            }
        case types.playerLost:
            return {
                ...state,
                player: {  
                    JJ: action.payload.JJ + 1,
                    G: action.payload.G,
                    P: action.payload.P + 1,
                    Dif: (action.payload.G - (action.payload.P + 1)),
                    PorcientoG: (action.payload.G / (action.payload.JJ + 1)) * 100,
                    PorcientoP: ((action.payload.P + 1) / (action.payload.JJ + 1)) * 100,
                }
            }
        case types.playersLoad:
            return {
                ...state,
                players: [...action.payload]
            }
    
        default:
            return state;
    }




}