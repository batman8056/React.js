import React from "react";
import Avator from "./Avator";
import Details from "./Details";

function Card(props){
    return(
        <div className="card">
            <div className="top">
                <p hidden={true} >{props.id}</p>
                <h2 className="name">{props.name}</h2>
                <Avator img={props.img}/>
                <div className="bottom">
                    <Details tel={props.tel} web={props.web}/>
                </div>
             </div>
    </div>
    )
};
export default Card;