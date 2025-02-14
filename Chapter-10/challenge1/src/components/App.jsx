import React, { useState } from "react";
import Todolist from "./Todolist"
import Button from "./Button"
import Heading from "./Heading";
import Inputbox from "./Inputbox";

function App() {
  const [inputtoDo, setinputToDo] = useState("");
  const [savetoDO, setsavetoDo] = useState([])

  function handleChange(event){
    setinputToDo(event.target.value)
  }
  function addItem(){
    setsavetoDo(prevValue => [...prevValue ,inputtoDo])
    setinputToDo("")
  }
  return (
    <div className="container">
      <Heading />
      <div className="form">
        <Inputbox onChange={handleChange} value={inputtoDo}/>
        <Button saveItem={addItem}/>
      </div>
      <div>
        <Todolist  toDO={savetoDO}/>
      </div>
    </div>
  );
}

export default App;