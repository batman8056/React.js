import React from "react";
import ReactDom from "react-dom";


const fName ="Manikandan";
const lName = "P";
// const number = 12;

ReactDom.render(
    <div>
        <h1>Hello {fName + " "+lName}!</h1>
        <h1>Hello {`${fName} ${lName}`}!</h1>
        <p>your lucky number is {Math.floor(Math.random() * 10)}</p>
    </div>, 
    document.getElementById("root")
);


