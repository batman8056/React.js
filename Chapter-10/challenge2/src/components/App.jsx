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
  function deleteListItem(id){
    setsavetoDo(prevValue => {
      return prevValue.filter(
        (item, index)=>{
          return index !== id ;
        }
      )
    })

  }
  return (
    <div className="container">
      <Heading />
      <div className="form">
        <Inputbox onChange={handleChange} value={inputtoDo}/>
        <Button savetoDO={setsavetoDo} setinputtoDo={setinputToDo} inputtoDo={inputtoDo}/>
      </div>
      <div>
      <ul>{savetoDO.map((item, index) =>(
        <Todolist item={item} key={index} id={index} deletItem={deleteListItem} />
      ))}
        </ul>
      </div>
    </div>
  );
}
export default App;