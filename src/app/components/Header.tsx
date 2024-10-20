import Nav from "./Nav";

function Header() {
  return (
    <div className="header">
      <Nav/>
      <hr className="horizontal-divider" style={{marginTop:"15px"}}/>
    </div>
  );
}

export default Header;
