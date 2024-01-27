import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./App.css";
import AddItem from "./components/AddItem";
import { useState } from "react";
import Todo from "./components/Todo";
// import Todo from "./components/Todo";
// import { useState } from "react";
export default function App() {
  const [note, setNote] = useState([])
  const newItem = (newNote) => {
    setNote(preNote => { return [...preNote, newNote] })
  };
  const delNote = (id) => {
    setNote((notes) => {
      return notes.filter((note, index) => { return index !== id })
    })
  }
  return (
    <>
    <div className="main">
    <Header />
    <AddItem newItem={newItem} />
    <div className="notes">
    {note.map((notes, index) => { return <Todo key={index} id={index} title={notes.title} body={notes.body} delNote={delNote} /> })}</div>
    </div>
    </>
  );
}
