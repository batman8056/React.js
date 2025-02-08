import React from "react";
import ReactDom from "react-dom";

//object
const customeStyle = {
    color: "red",
    fontSize: "50px",
    border: "2px solid black"
}
customeStyle.color="blue";

ReactDom.render(
    <div>
        {/* inline passing styles */}
        <h1 style={customeStyle} >Hello World!</h1>
        <p>This is my Paragraph</p>
    </div>, 
    document.getElementById("root")
);


