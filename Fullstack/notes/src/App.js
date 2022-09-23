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


  const onDeleteNote = (id) => {
       setNotes(notes.filter((note) => note.id != activeNote));
  };




  return (
    <div className='App'>
      
      <Sidebar 
      notes={notes} 
      onAddNote={onAddNote} 
      onDeleteNote={onDeleteNote}
      activeNote={activeNote}
      setActiveNote={setActiveNote}
       />

      <Main />
    </div>
  );
}

export default App;
