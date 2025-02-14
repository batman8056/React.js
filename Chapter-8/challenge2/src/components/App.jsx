import React, {useState} from "react";

function App() {
  const [fullName, setfullName] = useState({
    fName:"",
    lName:""
  })
  function handleChange(event){
    const {value, name} =event.target
    setfullName((prevValue)=>{
      if(name === "fName"){
        return {
          fName: value,
          lName: prevValue.lName
        }
      }else if(name === "lName"){
        return {
          fName: prevValue.fName,
          lName: value
        }
      }
    })
  }
  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <input onChange={handleChange} name="fName" type="text" placeholder="First Name" value={fullName.fName}/>
      <input onChange={handleChange} name="lName" type="text" placeholder="Last Name" value={fullName.lName}/>
      <button>Submit</button>
    </div>
  );
}
export default App;

//using multiple state to do opertaion
// function App() {
//     const [fName, setFname] = useState("")
//     const [lName, setLname] = useState("")
//     function handleChange(event){
//       setFname(event.target.value)
//     }
//     function handleChange1(event){
//       setLname(event.target.value);
//     }
//     return (
//       <div className="container">
//         <h1>Hello {fName} {lName}</h1>
//         <input onChange={handleChange} type="text" placeholder="First Name" value={fName}/>
//         <input onChange={handleChange1} type="text" placeholder="Last Name" value={lName}/>
//         <button>Submit</button>
//       </div>
//     );
//   }
//   export default App;