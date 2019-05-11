import { ACTION_EAT, ACTION_PLAY, ACTION_NAP, ACTION_CHAOS, ACTION_CUDDLE } from '../actions';

const initialState = {
    activity: 'napping'
}

export const activity= (state={initialState}, action) => {
    switch(action.type) {
        case ACTION_NAP:
           return{
               ...state,
               activity: 'napping'
           }
        break;
        case ACTION_EAT:
            return{
                ...state,
                activity: 'snacking'
            }
        break;
        case ACTION_PLAY:
            return{
                ...state,
                activity: 'into fun mischief'
            }
        break;
        case ACTION_CHAOS:
            return{
                ...state,
                activity: "clawing away at Greg and Rebecca's purple recliners and dining room chairs"
            }
        break;
        case ACTION_CUDDLE:
            return{
                ...state,
                activity: 'being a cuddle bug'
            }
        break;
        default:
            return state
        break;
    }
}