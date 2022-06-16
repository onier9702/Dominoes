import { types } from "../types/types";


const initialState = {

    players: [],
    player: {},
} 

export const playerReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.playerAdded:
            return {
                ...state,
                player: {...action.payload.player},
                players: [...action.payload.players],
            }

        case types.playerChosen:
            return {
                ...state,
                player: action.payload,
            }

        case types.playerWon:
            return { 
                ...state,
                player: {
                    ...action.payload,
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
                    ...action.payload,
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
        
        case types.playerRefresh:
            return {
                ...state,
                players: [...action.payload.players],
                player: {}
            }

        case types.playerDelete:
            return {
                ...state,
                players: state.players.filter( 
                    player => (player.id !== state.player.id)
                ),
                player: {}
            }

        case types.playerLogout:
            return {
                players: [],
                player: {},
            }
    
        default:
            return state;
    }

}