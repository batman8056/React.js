import React, {useState} from "react";


function App() {
    const [currState, nextState] = useState("Hello")
    const [styleCurr, styleNext] =useState(null)
    function clickButton(){
        nextState("Submitted");
    }
    function mouseOver(){
        styleNext({backgroundColor:"black"})
    }function mouseLeav(){
        styleNext({backgroundColor:"white"})
    }
    return (
      <div className="container">
        <h1>{currState}</h1>
        <input type="text" placeholder="What's your name?" />
        <button style={styleCurr} 
        onClick={clickButton}
        onMouseOver={mouseOver} 
        onMouseLeave={mouseLeav}>Submit</button>
      </div>
    );
  }
  export default App;