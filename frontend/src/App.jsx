import Note from "./components/Note";
import NoteList from "./components/NoteList";
import { Button } from "./components/Button.jsx";
import { getNotes, createNote } from "./services/http.js";
import { useEffect, useState } from "react";

function App() {
  const [noteData, setNoteData] = useState({
    title: "",
    content: "",
    active: true,
    archived: false,
  });
  const [notes, setNotes] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNoteData({
      ...noteData,
      [name]: value,
    });
  };

  const addNote = () => {
    createNote(noteData);
  };

  useEffect(() => {
    getNotes().then((notes) => {
      setNotes(notes);
    });
  }, [notes]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl mb-2">Notes</h1>
      <Note noteData={noteData} onInputChange={handleInputChange} />
      <Button text="Add Note" onClick={addNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
