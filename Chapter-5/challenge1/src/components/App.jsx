import React from "react";
import Form from "./Form.jsx"

const isForm =true
// function renderCreate(){
//   if(isForm === false){
//     return <Form />
//   }
//   else(isForm === true);{
//     return <h1>Hello</h1>
//   }
// }
const currentTime = new Date().getHours();
console.log(currentTime);
function App() {
  return (
    <div className="container">
      {/* {renderCreate()} */}
      {/* {isForm ? <Form /> :<h1>Hello</h1> } */}
      {/* {currentTime >12 ? <h1>Why are u working too late go to sleep</h1> : null} */}
      {currentTime >12 && <h1>Why are u working too late go to sleep</h1> }
    </div>
  );
}

export default App;
