import Nav from "./Nav";

function Header() {
  return (
    <div className="p-5 position: fixed  top-0 left-0 right-0 bg-inherit">
      <Nav/>
      <hr className="horizontal-divider" style={{marginTop:"15px"}}/>
    </div>
  );
}

export default Header;
