import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/book';

const Input = () => {
  const books = useSelector(state => state.book);
  const dispatch = useDispatch();

  const [ authorName, setAuthorName ] = useState('');
  const [ titleName, setTitleName ] = useState('');

  const submitForm = (element) => {
    element.preventDefault();
    const id = books.length + 1;
    const author = authorName;
    const title = titleName;
    dispatch(addBook(id, author, title))
    setAuthorName('');
    setTitleName('');
  }

  return (
    <form onSubmit={submitForm}>
      <input type="text" placeholder="Title" value={titleName} onChange={(e) => setTitleName(e.target.value)} />
      <input type="text" placeholder="Author" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Input;
