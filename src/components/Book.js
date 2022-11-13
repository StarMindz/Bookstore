import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Book = ({ id, author, title }) => {
  const [counter, setCounter] = useState('');
  const [chapterCounter, setChapterCounter] = useState('');
  useEffect(() => {
    setCounter(Math.round(Math.random() * 100));
    setChapterCounter(Math.round(Math.random() * 30));
  }, []);
  const book = (
    <div id={id} className=" my-5 p-5 w-11/12 mx-auto border border-gray-20 grid sm:grid-cols-1 md:grid-cols-3">
      <div className="">
        <li className="0">
          <p className="text-gray-600 font-bold">Fiction</p>
          <h2 className="text-2xl text-stone-900 font-bold">
            {title}
          </h2>
          <p className="text-blue-900">{author}</p>
          <div className="flex space-x-5 mt-3">
            <button className="pr-3 border-r-2 text-blue-900 hover:text-blue-100" type="button">Comments</button>
            <button type="button" className="text-blue-900 hover:text-blue-100">Edit</button>
          </div>
        </li>
      </div>

      <div className="flex md:border-r-2 p-5">
        <div className="progress" />

        <div className="flex-column">
          <p>
            {counter}
            %
          </p>
          <p>Completed</p>
        </div>
      </div>

      <div className="flex flex-col md:items-center">
        <div className="">
          <p className="text-gray-500">CURRENT CHAPTER</p>
          <p>
            CHAPTER
            {' '}
            {chapterCounter}
          </p>
          <button type="button" className="text-stone-200 bg-blue-600 p-2 rounded mt-4">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
  return book;
};

Book.propTypes = {
  id: PropTypes.number,
  author: PropTypes.string,
  title: PropTypes.string,
};

Book.defaultProps = {
  id: 0,
  author: '',
  title: '',
};

export default Book;
