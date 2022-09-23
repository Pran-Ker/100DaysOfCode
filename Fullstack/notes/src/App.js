import './App.css';
import {useState} from "react";

import uuid from 'react-uuid';
import Main from './Main';
import Sidebar from './Sidebar';

function App() {

  const [notes, setNotes] = useState([]);

  const [activeNote, setActiveNote] = useState(false);



  const onAddNote = () => {

      const newNote = {
        id: uuid(),

        title: "Unititled Note",

        body: "",

        lastModified: Date.now(),
      };
      
      setNotes([newNote, ...notes]);
  };


  const onDeleteNote = (idToDelete) => {
       setNotes(notes.filter((note) => note.id != idToDelete));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  }


  const onUpdateNote = (updateNote) => {
    const updateNoteArray = notes.map((note) => {
      if(note.id === activeNote){
        return updateNote;
      }

      return notes;
    });

    setNotes(updateNoteArray);
  }

  return (
    <div className='App'>
      
      <Sidebar 
      notes={notes} 
      onAddNote={onAddNote} 
      onDeleteNote={onDeleteNote}
      activeNote={activeNote}
      setActiveNote={setActiveNote}
       />

      <Main activeNote={getActiveNote()}
      onUpdateNote ={onUpdateNote}
      />
    </div>
  );
}

export default App;
