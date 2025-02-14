import React, { useState } from "react";
import Todolist from "./Todolist"
import Heading from "./Heading";
import Inputbox from "./Inputbox";

function App() {
  
  const [savetoDO, setsavetoDo] = useState([])

  function deleteListItem(id){
    setsavetoDo(prevValue => {
      return prevValue.filter(
        (item, index)=>{
          return index !== id ;
        }
      )
    })

  }
  function addItem(inputtoDo){
    setsavetoDo(prevValue => [...prevValue ,inputtoDo])
  }
  return (
    <div className="container">
      <Heading />
      <div className="form">
        <Inputbox savetoDO={savetoDO} setsavetoDo={setsavetoDo} addItem={addItem}/>
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