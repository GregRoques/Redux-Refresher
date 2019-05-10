export default function Activity({
    name, 
    napClick,
    eatClick, 
    playClick, 
    cuddleClick, 
    chaosClick}){
    return(
        <div>
            <button onClick={()=>napClick(name)}>Nap</button>
            <button onClick={()=>eatClick(name)}>Eat</button>
            <button onClick={()=>playClick(name)}>Play</button>
            <button onClick={()=>cuddleClick(name)}>Cuddle</button>
            <button onClick={()=>chaosClick(name)}>Chaos</button>
        </div>
    )
}