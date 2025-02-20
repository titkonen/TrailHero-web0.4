import React from 'react';
import './Notes.css';
import firebase from '../firebase';
import {NoteInput} from './NoteInput';

function NotesData() {
  const [notes, setNotes] = React.useState([])
  const [newNoteText, setNewNoteText] = React.useState()

  React.useEffect(() => {
      const db = firebase.firestore();
      return db.collection('notes').onSnapshot((snapshot) => {
        const notesData = [];
        snapshot.forEach(doc => notesData.push({...doc.data(), id: doc.id }));
        setNotes(notesData);
      });
  }, []);

  const onCreate = () => {
    const db = firebase.firestore();
    db.collection('notes').add({ text: newNoteText });
  }

  return (
    <div className="notes-header">
      <h1 className="heading">My Notes</h1>
      <ul className="">
        <input 
          value={newNoteText}
          className="input-style" 
          placeholder="Note text"
          onChange={(event) => setNewNoteText(event.target.value)} />
        <button 
          onClick={onCreate}
          className="button"
        >Add
        </button>
        {/* {notes.map(note => (
          
          <li 
            className="hide"
            key={note.text}
          >
            <NoteInput note={note} />
          </li>
        ))} */}
      </ul>  

      {notes.map(note => (
          
          <div 
            className="grid-container"
            key={note.text}
          >
            
            <div class="grid-item"><NoteInput note={note} /></div>
            

          </div>
        ))}

    </div>   
  );
}

export default NotesData;
