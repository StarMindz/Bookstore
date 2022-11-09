import React from 'react';

const Book = (props) => {
  const { id, author, title } = props;
  return (
    <div id={id}>
      { title }
      by
      { author }
    </div>
  );
};

// Book.propTypes = {
//   id: PropTypes.number,
//   author: PropTypes.string,
//   title: PropTypes.string,
// };

export default Book;
