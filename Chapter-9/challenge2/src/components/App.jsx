import React, { useState } from "react";

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
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputtoDo} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{savetoDO.map((item, index) =>(<li key={index}>{item}</li>))}
        </ul>
      </div>
    </div>
  );
}

export default App;