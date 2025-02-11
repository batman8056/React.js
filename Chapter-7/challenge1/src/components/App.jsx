import React, {useState} from "react";


function App() {
  
    const [currState, nextvalueState] = useState("")
    const [currsubmittedState, nextsubmittedState] = useState("")
    function clickButton(){
      nextsubmittedState(currState);
    }
    function handleChange(event){
      nextvalueState(event.target.value)
    }
    return (
      <div className="container">
        <h1>Hello {currsubmittedState}</h1>
        <input onChange={handleChange} type="text" placeholder="First Name" />
        <input onChange={handleChange} type="text" placeholder="Last Name" />
        <button onClick={clickButton}>Submit</button>
      </div>
    );
  }
  export default App;