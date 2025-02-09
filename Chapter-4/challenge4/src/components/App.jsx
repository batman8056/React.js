import React from "react";
import emojipedia from "../emojipedia.js"
import Emojipedias from "./Emojipedia.jsx"

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