import NoteView from "./NoteView";

const NoteList = ({ notes }) => {
  return (
    <div className="w-full flex flex-wrap gap-4 justify-center my-4">
      {notes.map((note) => (
        <NoteView key={note.id} noteData={note} />
      ))}
    </div>
  );
};

export default NoteList;
