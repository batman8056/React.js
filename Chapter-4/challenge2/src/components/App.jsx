import React from "react";
import Card from "./Card.jsx";
import contacts from  "../contacts.js";
import Avator from "./Avator.jsx";

function createCard(contact){
    return(
        <Card 
        id={contact.id}
        key={contact.id}//this is not going to use but requird for unique id for diffrentating the list
        name={contact.name}
        img={contact.imgURL}
        tel={contact.tel}
        web={contact.email}
        />
    )
}
function App(){
    return (
        <div>
            <Avator img="./image/avatar.png"/>
            {/* using map function to loop the value inside component */}
            {contacts.map(createCard)}
        </div>
    )
};
export default App;