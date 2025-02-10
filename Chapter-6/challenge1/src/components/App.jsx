import React from "react";


// var isDone =true;

function strike(){
  document.getElementById("root").style.textDecoration= "line-through"
  // isDone =true;
}
function unStrike(){
  document.getElementById("root").style.textDecoration= null;
  // isDone =false;
}

const strickThrough ={textDecoration: "line-through" };
function App() {
  return (
    <div>
      {/* <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p> */}
      <p>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
