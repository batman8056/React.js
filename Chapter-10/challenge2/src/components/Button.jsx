import React from "react";

function Button(props){

  function addItem(){
    props.savetoDO(prevValue => [...prevValue ,props.inputtoDo])
    props.setinputtoDo("")
  }
    return(
        <button onClick={addItem}>
          <span>Add</span>
        </button>
    )
}
export default Button;