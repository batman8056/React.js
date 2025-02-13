import React, { useState } from "react";



function Todolist(props){

    function handleClick(event) {
        event.target.style.textDecoration = event.target.style.textDecoration === "line-through" ? "none" : "line-through";
      }

    return(
        <ul>{props.toDO.map((item, index) =>(
        <li key={index} onClick={handleClick} >{item}</li>))}
        </ul>
    )
}
export default Todolist;