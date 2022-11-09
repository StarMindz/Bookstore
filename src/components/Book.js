import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ id, author, title }) => {
  const book = (
    <div id={id}>
      { title }
      by
      { author }
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
