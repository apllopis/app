/**
 * Si el modulo se exporta como nombrado:
 *  export const Note = () =>{....}
 * se tiene que importar como :
 *  import {Note} from "./components/Note.js"
 */
import "./App.css";
import Note from "./components/Note";
const notes = [
  {
    id: 12,
    content: "Cambiamos aros",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 13,
    content: "revision cables bogies",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
    categories: ["electricidad"],
  },
  {
    id: 14,
    content: "Engrase completo",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
    categories: ["mantenimiento", "revisión"],
  },
];

function App() {
  /**
   * la key en el elemento mas alto en este caso
   * en el elemnto <Note />
   *
   * Se puede sustituir {notes.map((note)={
   *  return(.....)})}>
   * por
   * {notes.map(note=> (.....))}
   *  si solo está el  return  en la función
   */
  return (
    <div>
      <h1>parte4</h1>
      <ul>
        {notes.map((note) => (
          <Note
            categories={note.categories}
            content={note.content}
            date={note.date}
            key={note.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
