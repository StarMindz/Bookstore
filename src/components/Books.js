import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/book';
import Book from './Book';
import Input from './Input';

const Books = (props) => {
  const books = useSelector(state => state.book);
  const dispatch = useDispatch();

  const handleRemove = (element) => {
    const id = element.target.id;
    dispatch(removeBook(id));
  }

  return (
    <>
      {books.map((book) => {
        const bookJsx = (
          <div className='singleBook'>
            <Book id={book.id} author={book.author} title={book.title} />
            <button id={book.id} onClick={handleRemove} type="submit">Remove</button>
          </div>
        );
        return bookJsx;
      })}
      <Input />
    </>
  );
}

export default Books;
