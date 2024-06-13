const Note = ({ noteData, onInputChange }) => {
  return (
    <div className="note w-full text-center ">
      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={noteData.title}
          onChange={onInputChange}
          className="p-2 rounded-md w-1/4 mb-2 text-base font-bold"
        />
      </div>
      <div>
        <textarea
          name="content"
          placeholder="Description"
          value={noteData.content}
          onChange={onInputChange}
          className="p-2 rounded-md w-1/4 h-40 mb-2 resize-none text-xs"
          maxLength="250"
        ></textarea>
      </div>
    </div>
  );
};

export default Note;
