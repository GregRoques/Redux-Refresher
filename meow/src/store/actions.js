
//==============================================================================
//Cats

export const ACTION_CALLIE = 'ACTION_CALLIE';
export const ACTION_MIDNIGHT = 'ACTION_MIDNIGHT';
export const ACTION_NACHEAUX = 'ACTION_NACHEAUX'

export function callie(name) {
    return {
        type: ACTION_CALLIE,
    };
}

export function midnight(name) {
    return {
        type: ACTION_MIDNIGHT,
    };
}

export function nacheaux(name) {
    return {
        type: ACTION_NACHEAUX,
    };
}


//==============================================================================
//Activities

export const ACTION_NAP = 'ACTION_NAP';
export const ACTION_EAT = 'ACTION_EAT';
export const ACTION_PLAY = 'ACTION_PLAY'
export const ACTION_CHAOS = 'ACTION_CHAOS'
export const ACTION_CUDDLE = 'ACTION_CUDDLE'

export function nap(name) {
    return {
        type: ACTION_NAP,
        payload:{
            name
        }
    };
}

export function eat(name) {
    return {
        type: ACTION_EAT,
        payload:{
            name
        }
    };
}

export function play(name) {
    return {
        type: ACTION_PLAY,
        payload:{
            name
        }
    };
}

export function chaos(name) {
    return {
        type: ACTION_CHAOS,
        payload:{
            name
        }
    };
}

export function cuddle(name) {
    return {
        type: ACTION_CUDDLE,
        payload:{
            name
        }
    };
}