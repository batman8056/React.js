//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
    <div>
        <h1>Hello world</h1>
        <ul>
      <li>Every days need progress</li>
      <li>Eat healthy food</li>
      <li>Stay calm</li>
    </ul>
    </div>,
    document.getElementById("root")
);