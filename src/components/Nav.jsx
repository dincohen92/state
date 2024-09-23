import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
      <Link to="/work">WORK</Link>
      <Link to="/about">ABOUT US</Link>
      <Link to="/members">DESIGNERS</Link>
      <Link to="/contact">CONTACT</Link>
    </div>
  );
}

export default Nav;
