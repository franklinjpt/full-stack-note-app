import Note from "./components/Note";
import NoteList from "./components/NoteList";
import { Button } from "./components/Button.jsx";
import {
  getNotes,
  getArchivedNotes,
  getActiveNotes,
  createNote,
} from "./services/http.js";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";

function App() {
  const [noteData, setNoteData] = useState({
    title: "",
    content: "",
    active: true,
    archived: false,
  });
  const [notes, setNotes] = useState([]);
  const [view, setView] = useState("all");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNoteData({
      ...noteData,
      [name]: value,
    });
  };

  const addNote = () => {
    createNote(noteData);
    setNoteData({
      title: "",
      content: "",
      active: true,
      archived: false,
    });
    toast.success("Note added successfully");
  };

  useEffect(() => {
    if (view === "all") {
      getNotes().then((notes) => {
        setNotes(notes);
      });
    } else if (view === "active") {
      getActiveNotes().then((notes) => {
        setNotes(notes);
      });
    } else {
      getArchivedNotes().then((notes) => {
        setNotes(notes);
      });
    }
  }, [notes]);

  return (
    <div className="flex flex-col items-center">
      <Toaster />
      <div className="bar w-full h-16 text-center ">
        <Button
          text="List all notes"
          color="blue"
          onClick={() => setView("all")}
        />
        <Button
          text="List actives notes"
          color="blue"
          onClick={() => setView("active")}
        />
        <Button
          text="List archived notes"
          color="blue"
          onClick={() => setView("archived")}
        />
      </div>
      <h1 className="text-4xl mb-2">Notes</h1>
      <Note noteData={noteData} onInputChange={handleInputChange} />
      <Button text="Add Note" onClick={addNote} color="green" />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
