
//==============================================================================
//Cats

export const ACTION_CALLIE = 'ACTION_CALLIE';
export const ACTION_MIDNIGHT = 'ACTION_MIDNIGHT';
export const ACTION_NACHEAUX = 'ACTION_NACHEAUX'

export function callie() {
    return {
        type: ACTION_CALLIE
    };
}

export function midnight() {
    return {
        type: ACTION_MIDNIGHT
    };
}

export function nacheaux() {
    return {
        type: ACTION_NACHEAUX
    };
}


//==============================================================================
//Activities

export const ACTION_NAP = 'ACTION_NAP';
export const ACTION_EAT = 'ACTION_EAT';
export const ACTION_PLAY = 'ACTION_PLAY'
export const ACTION_CHAOS = 'ACTION_CHAOS'
export const ACTION_CUDDLE = 'ACTION_CUDDLE'

export function nap() {
    return {
        type: ACTION_NAP
    };
}

export function eat() {
    return {
        type: ACTION_EAT
    };
}

export function play() {
    return {
        type: ACTION_PLAY
    };
}

export function chaos() {
    return {
        type: ACTION_CHAOS
    };
}

export function cuddle() {
    return {
        type: ACTION_CUDDLE
    };
}