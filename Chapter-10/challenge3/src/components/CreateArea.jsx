import React from "react";
import Note from "./Note.jsx";
import notes from "../notes.js";
import ButtonAdd from "./ButtonAdd.jsx"

function CreateArea(props) {
  
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <ButtonAdd />
      </form>
      {notes.map(noteItem => (
                    <Note
                    key={noteItem.key} 
                    title={noteItem.title}
                    content={noteItem.content}
                    />
                ))}
    </div>
  );
}

export default CreateArea;