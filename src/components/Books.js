import Book from './Book';
import React from 'react';
import Input from './Input';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          author: "J.K. Rowling",
          title: "Harry Porter",
        },
        {
          id: 2,
          author: "J.R.R. Tolkien",
          title: "The Lord of the Rings",
        },
      ]
    };
  }

  render() {
    const { books } = this.state;
    return (
      <>
        {books.map((book) => {
          return (
            <Book id={book.id} author={book.author} title={book.title} />
          )
        })}
        <button>Remove</button>
        <Input />
      </>
    )
  }
}

export default Books;