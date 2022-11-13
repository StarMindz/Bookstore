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
    <div className="m-1">
      <h3 className="text-xl text-gray-600 ml-3 font-light">ADD A NEW BOOK</h3>
      <form onSubmit={submitForm} className="d-flex flex-wrap space-evenly container-fluid">
        <input className="p-2 md:w-5/12 rounded outline-none m-2" type="text" placeholder="Title" value={titleName} onChange={(e) => setTitleName(e.target.value)} />
        <input className="p-2 rounded outline-none m-2" type="text" placeholder="Author" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
        <button className="bg-blue-600 px-5 py-2 text-gray-100 rounded hover:bg-blue-900" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Input;
