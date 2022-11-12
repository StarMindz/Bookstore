import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/book';

const Input = () => {
  const dispatch = useDispatch();

  const [authorName, setAuthorName] = useState('');
  const [titleName, setTitleName] = useState('');

  const submitForm = (element) => {
    element.preventDefault();
    const book = {
      item_id: Date.now(),
      title: titleName,
      author: authorName,
      category: '',
    };
    setAuthorName('');
    setTitleName('');
    dispatch(addBook(book));
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
