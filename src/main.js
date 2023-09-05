import React from "react";

function Main(props){
return(


<div className="con">
    


     
   <div className="top-sec">
    
  <div className="top-text">
    
 
<h1 className="tex">{props.top}</h1>
<h1  className="tex2">{props.simeTtop}</h1>

</div>

<img src={props.src} alt={props.src} className="imoges"></img >
</div>
<hr className="main-line"/>
<h3 className="bottomText">{props.bottom}<p className="tex3"> {props.pref}
</p></h3>
</div>

)
 }
 export default Main