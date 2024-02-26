import './App.css'
export default function Begin(){
    return(
        <div>
             <style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap')
</style>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
     <div className="Navbar">
      <div className="Headings">
        <input id="inp1" placeholder="🔍"></input>
        <div className="text">Categories</div>
        <div className="text">Website Builders</div>
        <div className="text">Today's deas</div>
      </div>
     </div>
     <div className="Heading2">
     <div className="text2">Best Website builders in the US</div>
     <div className="line"></div>
     <div style={{display:"flex",position:"absolute",top:"104.67px"}}>
     <span className="material-symbols-outlined">
check_circle
</span>
     <div className="text1" style={{marginRight:'50px'}}>Last Updated - February 22, 2020</div>
<span className="material-symbols-outlined">
error
</span>
     <div className="text1" style={{marginLeft:'0px',whiteSpace:"unwrap"}}> Advertising Disclosure</div>
     <div className="text1" style={{marginLeft:'375px',whiteSpace:"unwrap"}}>Top Relevant</div>
     <span className="material-symbols-outlined">
arrow_drop_down
</span>
     </div>
     <div className="line" style={{top:'140px'}}></div>
     <div style={{display:"flex",position:"absolute",top:"160.67px",gap:'30px'}} id="btn">
      <button>Tools</button>
      <button>AWS Builder</button>
      <button>Start Build</button>
      <button>Build Supplies</button>
      <button>Tooling</button>
      <button>BlueHosting</button>
     </div>
     <div className="Heading2" style={{display:'flex',top:"210.67px",left:'0',height:'40px'}}>
     <div className="text1">Home</div>
     <span className="material-symbols-outlined">
chevron_right
</span>
     <div className="text1">Hosting for all</div>
     <span className="material-symbols-outlined">
chevron_right
</span>
<div className="text1">Hosting</div>
<span className="material-symbols-outlined">
chevron_right
</span>
<div className="text1">Hosting6</div>
<span className="material-symbols-outlined">
chevron_right
</span>
<div className="text1">Hosting5</div>
     </div>
     </div>
    </div>
      
    );
}