/** comno es otra lista distinta tambien hay que poner la key */
const Note = ({ title, body }) => {
  return (
    <li>
      <p>
        <strong>{title}</strong>
      </p>
      <small>{body}</small>
    </li>
  );
};
export default Note;
