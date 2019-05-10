import { ACTION_EAT, ACTION_PLAY, ACTION_NAP, ACTION_CHAOS, ACTION_CUDDLE } from './actions';

export default function activity(state={}, action={type: ''}) {
    switch(action.type) {
        case ACTION_NAP:
            const newState = state.map(cat =>{
                if(Object.keys(cat) === action.payload.name){
                    return{
                        ...state,
                        [action.payload.name]:{
                            activity: 'nap'
                        }
                    }
                } else {
                    return state;
                }
            })
        break;
        case ACTION_EAT:
            const newState = state.map(cat =>{
                if(Object.keys(cat) === action.payload.name){
                    return{
                        ...state,
                        [action.payload.name]:{
                            activity: 'eat'
                        }
                    }
                } else {
                    return state;
                }
            })
        break;
        case ACTION_PLAY:
            const newState = state.map(cat =>{
                if(Object.keys(cat) === action.payload.name){
                    return{
                        ...state,
                        [action.payload.name]:{
                            activity: 'play'
                        }
                    }
                } else {
                    return state;
                }
            })
        break;
        case ACTION_CHAOS:
        const newState = state.map(cat =>{
            if(Object.keys(cat) === action.payload.name){
                return{
                    ...state,
                    [action.payload.name]:{
                        activity: `Destroy Greg and Rebecca's nice
                        purple recliners and dining room chairs. `
                    }
                }
            } else {
                return state;
            }
        })
        break;
        case ACTION_CUDDLE:
        const newState = state.map(cat =>{
            if(Object.keys(cat) === action.payload.name){
                return{
                    ...state,
                    [action.payload.name]:{
                        activity: 'Cuddles...YAY...PURR!!!'
                    }
                }
            } else {
                return state;
            }
        })
        break;
        default:
            return state
        break;
    }
}