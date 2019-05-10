export const ACTION_NAP = 'ACTION_NAP';
export const ACTION_EAT = 'ACTION_EAT';
export const ACTION_PLAY = 'ACTION_PLAY'

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