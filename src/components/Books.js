import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, removeBooks } from '../redux/books/book';
import Book from './Book';
import Input from './Input';

const Books = () => {
  const books = useSelector((state) => state.book);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleRemove = (element) => {
    const idNumber = element.target.id;
    dispatch(removeBooks(idNumber));
    setTimeout(() => dispatch(fetchBooks()), 500);
  };

  return (
    <>
      {books.map((book) => {
        const bookJsx = (
          <div className="singleBook">
            <Book id={book.id} author={book.author} title={book.title} category={book.category} />
            <button id={book.id} onClick={handleRemove} type="submit">Remove</button>
          </div>
        );
        return bookJsx;
      })}
      <Input />
    </>
  );
};

export default Books;
