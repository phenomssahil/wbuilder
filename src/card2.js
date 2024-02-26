import './cardCont.css'
export default function Card2(props){
    return(
        <>
        <div className="content">
            <img src={props.img} alt=""></img>
            <div className="straight"><div className="text15" style={{ width:"80px", marginLeft:"25px", marginTop:'20px',color:"#074786",backgroundColor:"#F2F4F7",boderRadius:'15px'}}>20% Off</div> <div className="text15"style={{width:"120px",marginTop:'-15px',marginLeft:'140px',color:"#074786",backgroundColor:"#F2F4F7",boderRadius:'15px'}}>Limited time</div></div>
            <div className="text14" style={{marginTop:'20px',marginLeft:'105px',fontWeight: '700',color: '#626E79'}}>Webbuilder 1</div>
            <div className="text11">{props.text}</div>
            <div style={{display:'flex'}}><div className="text12">$39.96</div><div className="text13">$49.96</div><div className="text13" style={{color:"red",marginLeft:'10px'}}>(20%off)</div></div>
            <button>View</button>
        </div>
        <div className="sign">
        <div className="signtxt">Sign up and get exclusive special deals</div>
        <input></input>
        <button>Sign Up</button>
        </div>
        </>
    );
}