
const NoteForm = ({ nuevaNota, handleChangeNote, handleSubmit }) => {

  return (
    <>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChangeNote}
          value={nuevaNota}
        />
        <button>Grabar mantenimiento</button>
      </form>
    </>
  )
}
export default NoteForm