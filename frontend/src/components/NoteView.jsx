import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPencil,
  faFloppyDisk,
  faBan,
  faBoxArchive,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  deleteNote,
  updateNote,
  archivedNote,
  activeNote,
} from "../services/http";
import { useState } from "react";
import { Toaster, toast } from "sonner";

const NoteView = ({ noteData }) => {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(noteData ? noteData.content : "");
  const [title, setTitle] = useState(noteData ? noteData.title : "");

  const onHandleDelete = (id) => {
    deleteNote(id);
    toast.success("Note deleted successfully");
  };

  const onHandleEdit = () => {
    setEditing(!editing);
    toast.warning("Edit mode enabled");
  };

  const onSaveEdit = () => {
    updateNote({
      id: noteData.id,
      title: title,
      content: content,
    });
    setEditing(!editing);
    toast.success("Note updated successfully");
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    // noteData[name] = value;
    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    }
  };

  const onArchive = (id) => {
    archivedNote(id);
    toast.success("Note archived/unarchived successfully");
  };

  const onActive = (id) => {
    activeNote(id);
    toast.success("Note active/unactive successfully");
  };

  return (
    <div>
      <Toaster />
      <div className="w-72 h-56 mt-2 rounded bg-blue-300 relative">
        <div>
          {editing ? (
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={onInputChange}
              className="p-2 rounded-md w-full mb-2 text-base font-bold bg-transparent"
            />
          ) : (
            <h2 className="text-2xl pt-2 text-center font-bold">
              {noteData.title}
            </h2>
          )}
        </div>
        <div>
          {editing ? (
            <textarea
              name="content"
              placeholder="Description"
              value={content}
              onChange={onInputChange}
              className="p-2 rounded-md w-full h-40 mb-2 resize-none text-xs bg-transparent"
              maxLength="250"
            ></textarea>
          ) : (
            <p className="text-sm p-3">{noteData.content}</p>
          )}
        </div>
        <div className="flex flex-end items-end absolute bottom-0 right-0">
          <button
            className="bg-white mb-1 mr-1 px-2 py-1 rounded-md"
            onClick={() => onActive(noteData.id)}
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
          {!editing ? (
            <button
              className="bg-gray-400 mb-1 mr-1 px-2 py-1 rounded-md"
              onClick={() => onArchive(noteData.id)}
            >
              <FontAwesomeIcon icon={faBoxArchive} />
            </button>
          ) : null}

          {editing ? (
            <button
              className="bg-red-500 mb-1 mr-1 px-2 py-1 rounded-md"
              onClick={onHandleEdit}
            >
              <FontAwesomeIcon icon={faBan} />
            </button>
          ) : (
            <button
              className="bg-green-400 mb-1 mr-1 px-2 py-1 rounded-md"
              onClick={onHandleEdit}
            >
              <FontAwesomeIcon icon={faPencil} />
            </button>
          )}

          {editing ? (
            <button
              className="bg-green-400 mb-1 mr-1 px-2 py-1 rounded-md"
              onClick={onSaveEdit}
            >
              <FontAwesomeIcon icon={faFloppyDisk} />
            </button>
          ) : (
            <button
              className=" bg-red-500 mb-1 mr-1 px-2 py-1 rounded-md"
              onClick={() => onHandleDelete(noteData.id)}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteView;
