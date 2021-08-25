/**
 * Si el modulo se exporta como nombrado:
 *  export const Note = () =>{....}
 * se tiene que importar como :
 *  import {Note} from "./components/Note.js"
 */
import { useState, useEffect } from "react";
import Note from "./components/Note";
import noteSrv from './services/notes'

/**  Se pasa una props a App y si no le llega
 * nada se crea como un array vacío
 */
function App() {
  const [notas, setNotas] = useState([]);
  const [nuevaNota, setNuevaNota] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAll, setShowAll] = useState(true)
  /** Se necesita un useEfect para que al hacer el setNotas
   * no se vuelva a renderizar el fetch y entre en bucle
   */
  useEffect(() => {
    setLoading(true);
    noteSrv.getAll()
      .then(inicialNotas => {
        setNotas(inicialNotas)
        setLoading(false)

      })
  }, [])

  const handleChange = (event) => {
    setNuevaNota(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const notaToAddToState = {
      content: nuevaNota,
      important: Math.random() < 0.55, // para que varíe
    };
    noteSrv
      .create(notaToAddToState)
      .then(returnedNote => {
        setNotas((prevNotas) => prevNotas.concat(returnedNote))
        setNuevaNota("")
      })
  };

  const notesToShow = showAll
    ? notas
    : notas.filter(note => note.important)

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
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Ver {showAll ? 'solo Importantes' : 'todas'}
        </button>
      </div>

      <ol>
        {notesToShow.map((note) => (
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
