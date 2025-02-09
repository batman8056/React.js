import React from "react";
import emojipedia from "../emojipedia.js"
import Emojipedias from "./Emojipedia.jsx"

//Map -Create a new array by doing something with each item in an array.
//Filter - Create a new array by keeping the items that return true.
//Reduce - Accumulate a value by doing something to each item in an array.
//Find - find the first item that matches from an array.
//FindIndex - find the index of the first item that matches.

function emojiPedia(emojipedi){
    return(
        <Emojipedias 
        id={emojipedi.id}
        key={emojipedi.id}//this is not going to use but requird for unique id for diffrentating the list in react 
        emoji={emojipedi.emoji}
        name={emojipedi.name}
        meaning={emojipedi.meaning}
        />
    )
}
function App(){
    return (
        <div>
            <h1>
        <span>emojipedia</span>
      </h1>
            {/* using map function to loop the value inside component */}
           {emojipedia.map(emojiPedia)}
        </div>
    )
};
export default App;