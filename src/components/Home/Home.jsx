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
            <h2>Phone</h2>
            <h3>310 352 65 87</h3>
          </article>
        </section>
        <article className="home-start">
          <h1>John Fajardo</h1>
          <h3>
            Tattoo <span>X</span> Studio
          </h3>
        </article>

        <article className="home-btns">
          <button className="second-btn">View Works</button>
          <button className="second-btn">About Me</button>
        </article>
      </section>
      <section className="banner">
        <IconContext.Provider value={{ size: "3em" }}>
          <section className="home-banner">
            <article className="home-banner-item">
              <FiCoffee />

              <h2>Title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                facere sit qui veniam doloremque illum repellendus voluptas
                quasi mollitia placeat cum.
              </p>
            </article>
            <article className="home-banner-item">
              <FiHeart />

              <h2>Title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                facere sit qui veniam doloremque illum repellendus voluptas
                quasi mollitia placeat cum.
              </p>
            </article>
            <article className="home-banner-item">
              <FiGift />

              <h2>Title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                facere sit qui veniam doloremque illum repellendus voluptas
                quasi mollitia placeat cum.
              </p>
            </article>
          </section>
        </IconContext.Provider>
      </section>
    </>
  );
}

export default Home;
