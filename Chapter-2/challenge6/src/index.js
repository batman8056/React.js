//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDom from "react-dom";

function getDayOrNightOrEvening() {
const now = new Date();
    const hours = now.getHours();

    if (hours >= 6 && hours < 12) {
        return "morning";
    } else if (hours >= 12 && hours < 18) {
        return "Afternoon";
    } else {
        return "evening";
    }
}
ReactDom.render(
    <div>
        <h1 className={getDayOrNightOrEvening()}>{"Good " +getDayOrNightOrEvening()}</h1>
        <p>This is my Paragraph</p>
    </div>, 
    document.getElementById("root")
);


