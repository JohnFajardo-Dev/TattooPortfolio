// CSS
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">JF</h1>
      <ul className="navbar-link-cont">
        <li className="navbar-link">
          <a href="">Inicio</a>
        </li>
        <li className="navbar-link">
          <a href="">About</a>
        </li>
        <li className="navbar-link">
          <a href="">Works</a>
        </li>
        <li className="navbar-link">
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
