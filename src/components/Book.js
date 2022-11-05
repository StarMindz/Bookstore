const Book = (props) => {
  const { id, author, title } = props;
  return (
    <div id={id}>{ title } by { author }</div>
  );
}

export default Book;