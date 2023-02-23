import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "./noteSlice";

export const AddNote = () => {
  const dispatch = useDispatch();
  const [noteText, setNoteText] = useState("");
  return (
    <div>
      <div className="flex justify-center gap-2 bg-green-400 p-2">
        <input
          type="text"
          className="text-center"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button
          className="rounded border-2 border-green-300 bg-green-300 py-1 px-2 text-white duration-300 hover:bg-green-700"
          onClick={() => dispatch(addTodo(noteText))}
        >
          Add Note
        </button>
      </div>
    </div>
  );
};
