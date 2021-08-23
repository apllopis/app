/**
 * Si el modulo se exporta como nombrado:
 *  export const Note = () =>{....}
 * se tiene que importar como :
 *  import {Note} from "./components/Note.js"
 */
import { useState, useEffect } from "react";
import "./App.css";
import Note from "./components/Note";
import { getAllNotas, createNota } from "./client/ConexBBDD";
/**  Se pasa una props a App y si no le llega
 * nada se crea como un array vacío
 */
function App() {
  const [notas, setNotas] = useState([]);
  const [nuevaNota, setNuevaNota] = useState("");
  const [loading, setLoading] = useState(false);
  /** Se necesita un useEfect para que al hacer el setNotas
   * no se vuelva a renderizar el fetch y entre en bucle
   */
  useEffect(() => {
    setLoading(true);
    /** getAllRegister devuelve la funcion  asincrona que devuelve data que se pasa
     * a setNotas
     */
    getAllNotas().then((data) => {
      setNotas(data);
      setLoading(false);
    });
  }, []);

  const handleChange = (event) => {
    setNuevaNota(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const notaToAddToState = {
      content: nuevaNota,
      date: new Date().toISOString(),
      important: Math.random() < 0.55, // para que varíe
    };
    createNota(notaToAddToState).then((newNote) => {
      setNotas((prevNotas) => prevNotas.concat(newNote));
      setNuevaNota("");
    });
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
      {loading ? "Cargando..." : ""}
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
