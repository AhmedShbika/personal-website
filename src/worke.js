import react from "react"

function Worke(props){
return( <div className="sub-container" id="
jkj">



<div>
 <p className="worke-descripe">{props.descripe}</p> 
 <a href={props.link}  target="_blank"><img src={props.img} alt={props.img} onClick={()=>props.scroll()} className="pic"></img ></a>
</div>
</div>)

}
export default Worke 