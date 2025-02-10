import React from "react";
import Form from "./Form.jsx"


const userIsRegistered =false

const currentTime = new Date().getHours();
console.log(currentTime);
function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
