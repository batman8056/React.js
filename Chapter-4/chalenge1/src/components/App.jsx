import React from "react";
import Card from "./Card.jsx";
import contacts from  "../contacts.js";
import Avator from "./Avator.jsx";
function App(){
    return (
        <div>
            <Avator img="./image/avatar.png"/>
            
            <Card name={contacts[0].name} img={contacts[0].imgURL} tel={contacts[0].tel} web={contacts[0].email} />
            <Card name={contacts[1].name} img={contacts[1].imgURL} tel={contacts[1].tel} web={contacts[1].email} />
            <Card name={contacts[2].name} img={contacts[2].imgURL} tel={contacts[2].tel} web={contacts[2].email} />
        </div>
    )
};
export default App;