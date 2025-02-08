import React from "react";

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

function Heading(){
    const timeOfDay = getDayOrNightOrEvening(); // Call function
    return(
        <div>
            <h1 className={timeOfDay}>Good {timeOfDay}</h1>
        </div>
    )
}
export default Heading;