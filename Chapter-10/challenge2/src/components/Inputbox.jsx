import React, { useState } from "react";

function Inputbox(props){
    const [inputtoDo, setinputToDo] = useState("");

    function handleChange(event){
        setinputToDo(event.target.value)
      }

    return(
        <div>
        <input type="text" onChange={handleChange} value={inputtoDo} />
        <button onClick={()=>{
            props.addItem(inputtoDo)
            setinputToDo("")
        }}>
          <span>Add</span>
        </button>
        </div>
    )
};

export default Inputbox;