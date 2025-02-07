import React from "react";
import ReactDom from "react-dom";

//using reactDom to render the content 
ReactDom.render(
    <div>
        <h1>Hello World</h1>
        <p>This is my Paragraph</p>
    </div>, 
    document.getElementById("root"));

// //another old way of javascript(pure Javascript)
// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello world"
// document.getElementById("root").appendChild(h1);

