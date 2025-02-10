import React, {useState} from "react";


function App() {
  //Destructuring a array
  const [count, state]= useState(0)

function increase(){
    state(count + 1)
}
function decrease(){
  state(count - 1)
}

  return <div className="container">
  <h1>{count}</h1>
  <button onClick={increase}>+</button>
  <button onClick={decrease}>-</button>
</div>
}

export default App;
