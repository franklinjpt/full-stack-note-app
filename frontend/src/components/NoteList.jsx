import NoteView from "./NoteView";

const NoteList = ({ notes }) => {
  const sortedNotes = [...notes].sort((a, b) => a.id - b.id);

  return (
    <div className="w-full flex flex-wrap gap-4 justify-center my-4">
      {sortedNotes.map((note) => (
        <NoteView key={note.id} noteData={note} />
      ))}
    </div>
  );
};

export default NoteList;
