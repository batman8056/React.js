import React from "react";
import ReactDom from "react-dom";

const img = "https://picsum.photos/200"
ReactDom.render(
    <div>
        <h1 className="heading" contentEditable="true" spellCheck="true">Hello world</h1>
        <ul>
      <li contentEditable="true" spellCheck="true">All days need progress</li>
      <img className="success-img" src="/image/image1.png" alt="Progress" />
      <li contentEditable="true" spellCheck="true">Eat healthy food</li>
      <img className="success-img" src="/image/image2.png" alt="Healthy Food" />
      <li contentEditable="true" spellCheck="true">Stay calm</li>
      <img className="success-img" src="/image/image3.png" alt="Stay Calm" />
    </ul>
    <p>Just Refress Random Image will be appear </p>
    <img src={img+ "?grayscale"} height="150px" width="200px" alt="random image"/>
    </div>,
    document.getElementById("root")
);

