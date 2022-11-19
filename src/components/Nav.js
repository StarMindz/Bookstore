import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Nav = () => {
  const nav = (
    <div className="navBar">
      <h1 className="projectHeading">Bookstore CMS</h1>
      <Link className="home menuitem" to="/">BOOKS</Link>
      <Link className="categories menuitem" to="/categories">CATEGORIES</Link>
      <FaUserAlt className="icon" />
    </div>
  );
  return nav;
};

export default Nav;
