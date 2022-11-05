import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Author" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Input;
