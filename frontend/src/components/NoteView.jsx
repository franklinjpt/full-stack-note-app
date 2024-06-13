import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { deleteNote } from "../services/http";

const NoteView = ({ noteData }) => {
  const onHandleDelete = (id) => {
    deleteNote(id);
  };

  const onHandleEdit = (id) => {
    console.log("Edit note with id: ", id);
  };

  return (
    <div>
      <div className="w-72 h-56 mt-2 rounded bg-blue-300 relative">
        <div>
          <h2 className="text-2xl pt-2 text-center font-bold">
            {noteData.title}
          </h2>
        </div>
        <div>
          <p className="text-sm p-3">{noteData.content}</p>
        </div>
        <div className="flex flex-end items-end absolute bottom-0 right-0">
          <button
            className="bg-green-400 mb-1 mr-1 px-2 py-1 rounded-md"
            onClick={() => onHandleEdit(noteData.id)}
          >
            <FontAwesomeIcon icon={faPencil} />
          </button>
          <button
            className=" bg-red-500 mb-1 mr-1 px-2 py-1 rounded-md"
            onClick={() => onHandleDelete(noteData.id)}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteView;
