// CSS
import "./Footer.css";

// ICONS
import { IconContext } from "react-icons";
import { FaFacebook, FaSquareInstagram, FaPinterest } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <section className="footer-items-cont">
        <article>
          <h1>John Fajardo</h1>
          <p>2025 | Graffiti Artist</p>
        </article>
        <article>
          <h2>Item</h2>
          <ul className="footer-ul-links">
            <li>
              <a href="">Lorem ipsum dolor</a>
            </li>
            <li>
              <a href="">Lorem ipsum dolor</a>
            </li>
            <li>
              <a href="">Lorem ipsum dolor</a>
            </li>
            <li>
              <a href="">Lorem ipsum dolor</a>
            </li>
          </ul>
        </article>
        <article>
          <h2>Item</h2>
          <ul className="footer-ul-links">
            <li>
              <a href="">Lorem ipsum dolor</a>
            </li>
            <li>
              <a href="">Lorem ipsum dolor</a>
            </li>
            <li>
              <a href="">Lorem ipsum dolor</a>
            </li>
            <li>
              <a href="">Lorem ipsum dolor</a>
            </li>
          </ul>
        </article>
        <IconContext.Provider value={{ size: "1.5em" }}>
          <article>
            <h2>Redes Sociales Oficiales</h2>
            <div className="footer-item-btns">
              <button className="main-btn">
                <FaFacebook />
              </button>
              <button className="main-btn">
                <FaSquareInstagram />
              </button>
              <button className="main-btn">
                <FaPinterest />
              </button>
            </div>
          </article>
        </IconContext.Provider>
      </section>
    </footer>
  );
}

export default Footer;
