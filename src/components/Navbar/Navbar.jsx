// CSS
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">JF</h1>
      <ul className="navbar-link-cont">
        <li className="navbar-link">Inicio</li>
        <li className="navbar-link">About</li>
        <li className="navbar-link">Works</li>
        <li className="navbar-link">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
