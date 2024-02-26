import './cardCont.css'
export default function Card(props){
return(
    <div>
        <div className="cont">
            <img src={props.img}></img>
    <div className="text4">{props.text}</div>
    <div className="text4" style={{top:'125px',fontWeight:'bold'}}>Main highlights</div>
    <div className="text5">{props.text2}</div>
    <div className="rating">
        <div className='text6'>{props.rating}</div>
        <div className="text4" style={{left:'25px',top:'47px'}}>{props.quote}</div>
        <div className='text7'>⭐️⭐️⭐️⭐️⭐️</div>
    </div>
    <button>View</button>
</div>
</div>
);
}
