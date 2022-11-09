import { Link } from 'react-router-dom';

const Nav = () => {
  const nav = (
    <div className="navBar">
      <Link className="home" to="/">Books</Link>
      <Link className="categories" to="/categories">Categories</Link>
    </div>
  );
  return nav;
};

export default Nav;
