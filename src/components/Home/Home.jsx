// CSS
import "./Home.css";

// COMPONENTS
import Navbar from "../Navbar/Navbar";

// REACT ICONS
import { IconContext } from "react-icons";
import { FiCoffee, FiGift, FiHeart } from "react-icons/fi";

function Home() {
  return (
    <>
      <section className="home" id="home">
        <Navbar />
        <section className="home-news">
          <article className="home-new home-new-left">
            <h2>Location</h2>
            <h3>CO | Bogota, Colombia</h3>
          </article>
          <article className="home-new home-new-right">
            <h2>Contact</h2>
            <h3>XXX XXX XX XX</h3>
          </article>
        </section>
        <article className="home-start">
          <h1>John Fajardo</h1>
          <h3>Graffiti Artist</h3>
        </article>

        <article className="home-btns">
          <a href="#works" className="second-btn">
            View Works
          </a>
          <a href="#about" className="second-btn">
            About Me
          </a>
        </article>
      </section>
    </>
  );
}

export default Home;
