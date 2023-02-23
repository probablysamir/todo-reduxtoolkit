import "./App.css";
import { AddNote } from "./features/notes/addNote";
import { NoteView } from "./features/notes/noteView";
function App() {
  return (
    <div className="App">
        <AddNote/>
        <NoteView/>
    </div>
  );
}

export default App;
