import { Link, NavLink } from "react-router-dom";
import "./HeaderStyle.css"

const Header = () => {
  return (
    <div>
      <nav className="nav-bar">
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <NavLink to="/users">users</NavLink>
        {/* step 3 */}
        <NavLink to="/posts">posts</NavLink>
      </nav>
    </div>
  );
};

export default Header;
