import { TickIcon, TrashIcon } from "../../icons/icons";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, completeTodo } from "./noteSlice";

export const NoteView = () => {
  const noteState = useSelector((state: any) => state.note.todoList);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex justify-center">
        <ul className="mt-3">
          {noteState.map((note: any) => (
            <li
              className={`flex justify-center p-2 align-middle ${
                note.complete ? "text-green-500" : ""
              }`}
              key={note.id}
            >
              <p className="mr-4">{note.text}</p>
              {!note.complete && (
                <button
                  className="mx-1 text-green-500"
                  onClick={() => dispatch(completeTodo(note.id))}
                >
                  <TickIcon />
                </button>
              )}
              <button className=" text-red-500" onClick={() => dispatch(removeTodo(note.id))}>
                <TrashIcon />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

{
  /* <li className="flex justify-center p-2 align-middle">
    Go to schoolfasdjfashdf
    <button className="mx-1 ml-4 text-green-500">
      <TickIcon />
    </button>
    <button className=" text-red-500">
      <TrashIcon />
    </button>
  </li>
  <li className="flex justify-center p-2 align-middle">
    Go to schoolgads
    <button className="mx-1 ml-4 text-green-500">
      <TickIcon />
    </button>
    <button className="text-red-500">
      <TrashIcon />
    </button>
  </li>
  <li className="flex justify-center p-2 align-middle">
    Go to school
    <button className="mx-1 ml-4 text-green-500">
      <TickIcon />
    </button>
    <button className="text-red-500">
      <TrashIcon />
    </button>
  </li> */
}
