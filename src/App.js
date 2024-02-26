import { data, data2 } from './card';
import Card from './cardCont';
import Begin from './begin';
import './App.css'
import Img2 from './img/last.png'
import Img from './img/comp.png'
import Card2 from './card2';
function App() {
  return (
    <div className="App">
      <Begin/>
      <div className="container">{
        data.content.map((item,index)=>{
          return(
            <Card item={item} img={item.img} text={item.text} text2={item.text2} rating={item.rating} quote={item.quote}/>
          )
        })
      }
      <div className="cont" style={{height:'436px'}}>
            <img src={Img}></img>
    <div className="text4">CDK Resposive Builder: An extensive library of widgets and apps, and detailed step-by-step guides</div>
    <div className="text4" style={{top:'125px',fontWeight:'bold'}}>Main highlights</div>
    <div className="box"><div className="box2">9.9</div>
      <div className="text8" style={{whitexSpace:'nowrap',marginLeft:'40px',marginTop:'10px'}}>building responsive</div>
    <div className="box2" style={{top:'44px'}}>8.9</div><div className="text8" style={{whiteSpace:'nowrap',marginLeft:'40px'}}>Cool</div>
    <div className="box2"style={{top:'80px'}}>8.9</div><div className="text8" style={{whiteSpace:'nowrap',marginLeft:'40px'}}>Docs</div></div>
    <div className="rating">
        <div className='text6'>9.1</div>
        <div className="text4" style={{left:'25px',top:'47px'}}>Very Good</div>
        <div className='text7'>⭐️⭐️⭐️⭐️⭐️</div>
    </div>
    <button style={{top:'350px'}}>View</button>
    <div className="box3">
      <div className="text8" style={{marginBottom:"0px"}}>Why we love it</div>
      <div className="text8" style={{marginBottom:"0px",display:'flex'}}><span class="material-symbols-outlined"  style={{color:"#0855A1",border:"0",backgroundColor:'#EBF5FF',width:'24px',height:'24px',borderRadius:'50%'}}>
check
</span>Documentation</div>
      <div className="text8" style={{marginBottom:"0px",display:'flex'}}><span class="material-symbols-outlined"  style={{color:"#0855A1",border:"0",backgroundColor:'#EBF5FF',width:'24px',height:'24px',borderRadius:'50%'}}>
check
</span>Easy Use</div>
      <div className="text8" style={{marginBottom:"0px",display:'flex'}}><span class="material-symbols-outlined"  style={{color:"#0855A1",border:"0",backgroundColor:'#EBF5FF',width:'24px',height:'24px',borderRadius:'50%'}}>
check
</span>Out of Box</div>
    </div>
</div>
       </div>
<div className="text10">Related deals you might like for</div>

<div className="main-content">{
        data2.content2.map((item,index)=>{
          return(
            <Card2 item={item} img={item.img} text={item.text}/>
          )
        })
      }
      </div>
      <div className="contact" >
        <div className="Text" style={{top:'146px'}}>CATEGORIES</div>
        <div className="Text"style={{top:'186px',color:'#B6BDC4'}}>Web Builder</div>
        <div className="Text"style={{top:'226px',color:'#B6BDC4'}}>Hosting</div>
        <div className="Text"style={{top:'266px',color:'#B6BDC4'}}>Data Center</div>
        <div className="Text"style={{top:'306px',whiteSpace:'nowrap',color:'#B6BDC4'}}>Robotic-Automation</div>
        <div className="Text" style={{top:'146px',left:"695px"}}>CONTACT</div>
        <div className="Text"style={{top:'186px',color:'#B6BDC4',left:"695px"}}>Contact</div>
        <div className="Text"style={{top:'226px',color:'#B6BDC4',left:"695px"}}>Privacy Policy</div>
        <div className="Text"style={{top:'266px',color:'#B6BDC4',left:"695px",whiteSpace:'nowrap'}}>Terms Of Service</div>
        <div className="Text"style={{top:'306px',whiteSpace:'nowrap',color:'#B6BDC4',left:"695px"}}>Categories</div>
        <div className="Text"style={{top:'346px',whiteSpace:'nowrap',color:'#B6BDC4',left:"695px"}}>About</div>
        <div className="Text"style={{top:'226px',color:'#B6BDC4',left:"1095px",whiteSpace:"nowrap"}}>United States<span class="material-symbols-outlined">
arrow_drop_down
</span></div>
      </div>
    </div>
   
  );
}

export default App;
