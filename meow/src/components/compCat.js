import '/compCat.module.css';

export default function Cats(){
    return(
        <div className="catPicContainer">
            <img onClick={()=>callieClick()} src='public/nacheaux.jpg'/>
            <img onClick={()=>midnightClick()} src='public/callie.jpg'/>
            <img onClick={()=>midnightClick()} src='public/midnight.jpg'/>
        </div>
    )
}