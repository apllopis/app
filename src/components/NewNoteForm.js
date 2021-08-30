import { useRef, useState } from 'react'
import Togglable from './Togglable'
export default function NoteForm({ addNote, handleLogout }) {
  const [newNote, setNewNote] = useState('')
  const togglableRef = useRef()

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: 'true'
    }
    addNote(noteObject)
    setNewNote('')
    togglableRef.current.toggleVisibility()
  }
  return (
    <Togglable buttonLabel='Nueva Nota' ref={togglableRef}>
      <h3>Nueva Nota</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={handleChange}
          value={newNote}
          placeholder='Nueva Nota'
        />
        <button type='submit'>Salvar</button>
      </form>
      <div>
        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </Togglable>
  )
}