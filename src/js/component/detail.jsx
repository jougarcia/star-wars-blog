import React, {useContext} from "react";
import { Link, useNavigate,  } from "react-router-dom";
import { Context } from "../store/appContext";
export const Details=(props)=>{
    function imgError(e){
        console.log("error"+ e.target.src)
        e.target.src = "https://blog.cleriti.com/hs-fs/hub/160303/file-2584256790-png/AndroidDev404.png";
      }
const navigate=useNavigate()
const{actions,store}=useContext(Context)
    return(
        <div className="container-fluid  justify-content-center" style={{backgroundColor: "black"}}>
        <div className="card row " style={{backgroundColor: "black"}}>
            <div className="col-6">
        <img style={{maxWidth: "450px"}} src={props.img} 
          onError={imgError}/>
          </div>
          <div className="col-6 text-white">
            <h1 >Characteristics</h1>
          <p>
            
        <span >{props.text1} {props.prop1}</span><br />
        <span >{props.text2} {props.prop2}</span> <br />
        <span >{props.text3} {props.prop3}</span><br />
        <span > {props.text4} {props.prop4} </span><br />
        </p>
        </div>
        </div>
        
        
        
        <div className="buttonsdeta">
            <Link to={-1}><button className="btn btn-secondary me-2">Go Back</button></Link>
            <button onClick={()=>actions.handleFavorites({name:props.title,link:`/${props.type}/${props.id}`})} className="btn btn-warning">Favorite</button>
        </div>
        </div>
    )
}