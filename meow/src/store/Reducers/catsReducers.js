import { ACTION_CALLIE, ACTION_MIDNIGHT, ACTION_NACHEAUX } from '../actions';

const initialState = {
    cat: "Lil' Nacheaux"
}

export default function theCats(state=initialState, action={type: ''}){
    switch(action.type){
        case ACTION_CALLIE: 
            return{
                cat: 'Callie'
            }
        break;
        case ACTION_MIDNIGHT:
            return{
                cat: 'Midnight'
            }
        break;
        case ACTION_NACHEAUX:
            return{
                cat: `Lil' Nacheaux`
            }
        break;
    }
    

}