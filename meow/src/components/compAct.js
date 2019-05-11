import React from 'react';

export default function compAct({
    activity,
    napClick,
    eatClick, 
    playClick, 
    cuddleClick, 
    chaosClick}){
        return(
            <div>
                {activity}
                <br/>
                <hr/>
                <br/>
                <button onClick={()=> napClick()}>Nap</button>
                <button onClick={()=> eatClick()}>Eat</button>
                <button onClick={()=> playClick()}>Play</button>
                <button onClick={()=> cuddleClick()}>Cuddle</button>
                <button onClick={()=> chaosClick()}>Chaos</button>
            </div>
        )
}