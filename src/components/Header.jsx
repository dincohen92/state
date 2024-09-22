import {Link} from 'react-router-dom';
import Nav from "./Nav";

function Header() {
  return (
    <div className="Header">
      <Link to="/">STATE</Link>
      <Nav/>
    </div>
  );
}

export default Header;
