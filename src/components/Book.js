import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ id, author, title, category }) => {
  const book = (
    <div id={id}>
      { title }
      by
      { author }
      of
      { category }
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
