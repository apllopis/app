/**
 * Si el modulo se exporta como nombrado:
 *  export const Note = () =>{....}
 * se tiene que importar como :
 *  import {Note} from "./components/Note.js"
 */
import { useState, useEffect } from "react";
import "./App.css";
import Note from "./components/Note";

/**  Se pasa una props a App y si no le llega
 * nada se crea como un array vacío
 */
function App() {
  const [notas, setNotas] = useState([]);
  const [nuevaNota, setNuevaNota] = useState("");
  /** Se necesita un useEfect para que al hacer el setNotas
   * no se vuelva a renderizar el fetch y entre en bucle
   */
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setNotas(json);
      });
  }, []);

  const handleChange = (event) => {
    setNuevaNota(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const notaToAddToState = {
      id: notas.length + 1,
      userId: 1501,
      title: nuevaNota,
      body: nuevaNota,
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
      <ol>
        {notas.map((note) => (
          <Note {...note} key={note.id} />
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
