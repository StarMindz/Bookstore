import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/book';
import Book from './Book';
import Input from './Input';

const Books = () => {
  const books = useSelector((state) => state.book);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      {books.map((book) => {
        const bookJsx = (
          <div className="singleBook">
            <Book id={book.id} author={book.author} title={book.title} category={book.category} />
          </div>
        );
        return bookJsx;
      })}
      <div className="divider"></div>
      <Input />
    </>
  );
};

export default Books;
