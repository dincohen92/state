import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div className="nav-bar">
      <div>
        <Link to="/" className="logo">STATE</Link>
      </div>
      <div className="nav-bar-links">
        <Link to="/projects" className="nav-bar-link">PROJECTS</Link>
        <Link to="/about" className="nav-bar-link">ABOUT US</Link>
        <Link to="/members" className="nav-bar-link">DESIGNERS</Link>
        <Link to="/contact" className="nav-bar-link">CONTACT</Link>
      </div>
    </div>
  );
}

export default Nav;
