/** comno es otra lista distinta tambien hay que poner la key */
const Note = ({ content, date }) => {
  return (
    <li>
      <p>
        <strong>{content}</strong>
      </p>
      <small>
        <time>{date}</time>
      </small>
    </li>
  );
};
export default Note;
