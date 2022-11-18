import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, fetchBooks } from '../redux/books/book';

const Input = () => {
  const dispatch = useDispatch();

  const [authorName, setAuthorName] = useState('');
  const [titleName, setTitleName] = useState('');
  const [categoryName, setCategoryName] = useState('');

  const submitForm = (element) => {
    element.preventDefault();
    // if (categoryName === '') {
    //   setCategoryName('fiction');
    // }
    const book = {
      item_id: Date.now(),
      title: titleName,
      author: authorName,
      category: categoryName,
    };
    setAuthorName('');
    setTitleName('');
    dispatch(addBook(book));
    setTimeout(() => dispatch(fetchBooks()), 500);
  };

  return (
    <form className="Form" onSubmit={submitForm}>
      <div className="inputBook">ADD A NEW BOOK</div>
      <div className="inputSection">
        <div className="actualInput">
          <input className="input titleInput" type="text" placeholder="Title" value={titleName} onChange={(e) => setTitleName(e.target.value)} />
          <input className="input authorInput" type="text" placeholder="Author" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
          <select className="input categoryInput" placeholder="Category" id="category" name="category" onChange={(e) => setCategoryName(e.target.value ? e.target.value : '')}>
            <option value="fiction" selected>Fiction</option>
            <option value="romance">Romance</option>
            <option value="mystery">Mystery</option>
            <option value="drama">Drama</option>
            <option value="poetry">Poetry</option>
            <option value="autobiography">Autobiography</option>
          </select>
        </div>
        <button className="submitButton" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Input;
