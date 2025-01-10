// CSS
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">JF</h1>
      <ul className="navbar-link-cont">
        <li className="navbar-link">
          <a href="#home">Inicio</a>
        </li>
        <li className="navbar-link">
          <a href="#about">About</a>
        </li>
        <li className="navbar-link">
          <a href="#works">Works</a>
        </li>
        <li className="navbar-link">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
