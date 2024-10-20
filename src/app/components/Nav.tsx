import Link from "next/link";

function Nav() {
  return (
    <div className="nav-bar">
      <div>
        <Link href="/" className="logo">STATE</Link>
      </div>
      <div className="nav-bar-links">
        <Link href="/projects" className="nav-bar-link">PROJECTS</Link>
        <Link href="/about" className="nav-bar-link">ABOUT US</Link>
        <Link href="/members" className="nav-bar-link">DESIGNERS</Link>
        <Link href="/contact" className="nav-bar-link">CONTACT</Link>
      </div>
    </div>
  );
}

export default Nav;
