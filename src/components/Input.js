import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, fetchBooks } from '../redux/books/book';

const Input = () => {
  const dispatch = useDispatch();

  const [authorName, setAuthorName] = useState('');
  const [titleName, setTitleName] = useState('');

  const submitForm = (element) => {
    element.preventDefault();
    const id = Date.now();
    const author = authorName;
    const title = titleName;
    dispatch(addBook(id, author, title));
    dispatch(fetchBooks());
    setAuthorName('');
    setTitleName('');
  };

  return (
    <form onSubmit={submitForm}>
      <input type="text" placeholder="Title" value={titleName} onChange={(e) => setTitleName(e.target.value)} />
      <input type="text" placeholder="Author" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Input;
