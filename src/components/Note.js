/** comno es otra lista distinta tambien hay que poner la key */
const Note = ({ categories = [], content, date }) => {
  return (
    <li>
      <p>
        <strong>{content}</strong>
      </p>
      <small>
        <time>{date}</time>
      </small>
      <div>
        {categories.map((categoria) => (
          <small key={categoria}>{categoria} </small>
        ))}
      </div>
    </li>
  );
};
export default Note;
