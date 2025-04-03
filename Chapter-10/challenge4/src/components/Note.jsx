import React from "react";

function Note(props){

    function handleClick(){
        return props.onDelete(props.id)

    }
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <Button onClick={handleClick}>Delete</Button>
        </div>
    );
};
export default Note;