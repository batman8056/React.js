import React from "react";

function Button(props){
    return(
        <button onClick={props.saveItem}>
          <span>Add</span>
        </button>
    )
}

export default Button;