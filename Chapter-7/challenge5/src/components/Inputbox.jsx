import React from "react";

function Inputbox(props){
    return(
        <input type="text" onChange={props.onChange} value={props.value} />
    )
};

export default Inputbox;