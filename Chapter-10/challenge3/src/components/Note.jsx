import React from "react";
import ButtonDel from "./ButtonDel.jsx";

function Note(props){
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <ButtonDel />
        </div>
    );
};
export default Note;