import React,{useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CreateArea from "./CreateArea.jsx"
import Note from "./Note.jsx";

function App(){

    const [notes, setNotes] = useState([]);

    function addNotes(newNotes){
        setNotes(prevNotes=>{
            return [...prevNotes, newNotes];
        });
    }

    function deleteNote(id){
        console.log("clicked")
        setNotes(prevNotes=>{
            return prevNotes.filter((noteItem, index)=>{
                return index !== id;

            })
        })
    }
    
    return(
        <div>
            <Header />
            <CreateArea onAdd={addNotes}/>
            {notes.map((noteItems, index)=>{
                return <Note 
                key={index}
                id={index}
                title={noteItems.title} 
                content={noteItems.content}
                onDelete={deleteNote} 
                />
            })}
            <Footer />
        </div>
    )
}
export default App;