import React from "react";

function Todolist(props){
    return(<div>
        <li 
        //executed when onClick happen
        onClick={() => {
            props.deletItem(props.id)
        }
    }
        >
            {props.item}
        </li>
        </div>
    )
}
export default Todolist;