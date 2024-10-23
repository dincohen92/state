import Link from "next/link";

function Nav() {
  return (
    <div className="flex justify-between">
      <div>
        <Link href="/" className="logo">STATE</Link>
      </div>
      <div className="flex gap-4">
        <Link href="/projects" className="nav-bar-link">PROJECTS</Link>
        <Link href="/about" className="nav-bar-link">ABOUT US</Link>
        <Link href="/team" className="nav-bar-link">OUR TEAM</Link>
        <Link href="/contact" className="nav-bar-link">CONTACT</Link>
      </div>
    </div>
  );
}

export default Nav;
