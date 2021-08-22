/**
 * Si el modulo se exporta como nombrado:
 *  export const Note = () =>{....}
 * se tiene que importar como :
 *  import {Note} from "./components/Note.js"
 */
import { useState } from "react";
import "./App.css";
import Note from "./components/Note";

/**  Se pasa una props a App y si no le llega
 * nada se crea como un array vacío
 */
function App({ notes = [] }) {
  const [notas, setNotas] = useState(notes);
  const [nuevaNota, setNuevaNota] = useState("");
  const [showAll, setShowAll] = useState(true);
  const handleChange = (event) => {
    setNuevaNota(event.target.value);
  };

  const handleShowAll = () => {
    setShowAll(() => !showAll);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const notaToAddToState = {
      id: notas.length + 1,
      content: nuevaNota,
      date: new Date().toISOString(),
      important: Math.random() < 0.55, // para que varíe
      categories: ["mantenimiento"],
    };
    /**  [notas.concat(notaToAddToState)]
     *  version con concat
     */

    setNotas([...notas, notaToAddToState]);
    setNuevaNota("");
  };

  /**
   * la key en el elemento mas alto en este caso
   * en el elemnto <Note />
   *
   * Se puede sustituir {notes.map((note)={
   *  return(.....)})}>
   * por
   * {notes.map(note=> (.....))}
   *  si solo está el  return  en la función
   *
   * Poner en el campo input value para que react controle el imput
   * en lugar del DOM
   */
  return (
    <div>
      <h1>Mantenimientos</h1>
      <button onClick={handleShowAll}>
        {showAll ? "Sólo las notas importantes" : "Todas las notas"}
      </button>
      <ol>
        {notas
          .filter((note) => {
            if (showAll === true) return true;
            return note.important === true;
          })
          .map((note) => (
            <Note
              categories={note.categories}
              content={note.content}
              date={note.date}
              key={note.id}
            />
          ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={nuevaNota} />
        <button>Grabar mantenimiento</button>
      </form>
    </div>
  );
}

export default App;
