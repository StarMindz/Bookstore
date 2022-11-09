import { Link } from 'react-router-dom';

const Nav = () => {
    <div className="navBar">
      <Link className="home" to="/">Books</Link>
      <Link className="categories" to="/categories">Categories</Link>
    </div>
};

export default Nav;
