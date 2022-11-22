/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBooks, fetchBooks } from '../redux/books/book';

const Book = ({
  id,
  author,
  title,
  category,
}) => {
  const dispatch = useDispatch();

  category = category.toUpperCase();
  const [count, setCount] = useState('');
  const [chapterCount, setChapterCount] = useState('');

  useEffect(() => {
    setCount(Math.round(Math.random() * 100));
    setChapterCount(Math.round(Math.random() * 30));
  }, []);

  const handleRemove = (element) => {
    const idNumber = element.target.id;
    dispatch(removeBooks(idNumber));
    setTimeout(() => dispatch(fetchBooks()), 500);
  };

  const book = (
    <div id={id} className="bookContainer">
      <div className="mainBookSection">
        <div className="categoryTitle">{ category }</div>
        <div className="bookTitle">{ title }</div>
        <div className="authorName">{ author }</div>
        <div className="buttons">
          <span className="bookButton specialButton" type="submit">Comments</span>
          <button className="bookButton specialButton" id={id} onClick={handleRemove} type="submit">Remove</button>
          <span className="bookButton" type="submit">Edit</span>
        </div>
      </div>

      <div className="progressSection">
        <div className="progressDiv">
          <div className="progressBar" />
          <div className="completeRatio">
            <p className="countValue">
              { count }
              %
            </p>
            <p className="countText">Completed</p>
          </div>
        </div>
      </div>

      <div className="chapterDiv">
        <h2 className="chapterHead">CURRENT CHAPTER</h2>
        <p className="chapterCount">
          CHAPTER
          { chapterCount }
        </p>
        <div className="chapterButton">Update Progress</div>
      </div>

    </div>
  );
  return book;
};

Book.propTypes = {
  id: PropTypes.number,
  author: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
};

Book.defaultProps = {
  id: 0,
  author: '',
  title: '',
  category: '',
};

export default Book;
