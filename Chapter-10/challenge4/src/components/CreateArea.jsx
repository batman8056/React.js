import React, { useState } from "react";


function CreateArea(props) {

  const [notes, setNotes] = useState({
    title: "",
    content:""
  })

  function handleChange(event){
    const {name, value} = event.target;

    setNotes(prevNotes =>{
      return{
        ...prevNotes, [name]:value
      }
    })
  }
  function submitedNotes(event){
    props.onAdd(notes);
    setNotes({
      title: "",
      content:""
    })
    event.preventDefault();
}

  
  return (
    <div>
      <form className="create-note">
        <input name="title" onChange={handleChange} value= {notes.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value= {notes.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitedNotes}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;