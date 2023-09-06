
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react";
import Ahmedpic from './images/Component 4 (1).png'
import  logo from './images/Component 8 (2).png'
import facebooke from "./images/Facebook.png"
import Instagram from "./images/Instagram.png"
import tiktok from "./images/WhatsApp.png"
import Worke from "./worke";
function Header(props){
    return (
<div className="all-header-part">
    

<nav className="navigation">
<img src={logo} alt={logo} className="logo"></img>
  <div className="right-side-nav">
    
 
  <a onClick={()=>props.scroll()}>projects</a>  
    <a onClick={()=>props.scroll2()}> services</a>
        
    </div>

</nav>
<hr className="under-nav-line"/>
<div className="allm">
    

<div className="header-bottom-section">
    


<img src={Ahmedpic} alt={Ahmedpic} className="Ahmed-pic"></img>
</div>
<div>
    

<div className="Ahmed-introduce">
<h1 className="A1">Ahmed shbika</h1>
<h2 className="A2"> front-end devoloper</h2>
<p className="text"> Am a Business student who has conquered JavaScript, HTML, CSS, and React. Their journey led to an impressive portfolio website, showcasing not just skills but a passion for seamless user experiences.</p>

</div>
<hr className="under-text-line"/>
<div className="socila-media-links">
    <a href="https://www.facebook.com/profile.php?id=100030711543694&mibextid=ZbWKwL"><img src={facebooke} alt={facebooke} className="face"></img></a>
    <a href="https://instagram.com/ahmedshbika?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"><img src={Instagram} alt={Instagram} className="insta"></img></a>
    <a href="https://wa.me/qr/HIOLA547TPBLF1"><img src={tiktok} alt={tiktok} className="tik"></img></a>
</div>
</div>
</div>
</div>)
}
export default Header