// CSS
import "./About.css";

// REACT ICONS
import { IconContext } from "react-icons";
import { FiCoffee, FiGift, FiHeart } from "react-icons/fi";
function About() {
  return (
    <main id="about">
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
      <section className="about">
        <article className="about-img-cont">
          <img className="about-img" src="tattoomachine.jpg" alt="" />
        </article>
        <article className="about-txt-cont">
          <h2 className="about-txt-title">El CREW</h2>
          <h3 className="about-txt-info">
            Nuestro equipo está comprometido con la excelencia y tiene un ojo
            agudo para cada detalle. Inspirado por influencias locales e
            internacionales, explora continuamente nuevas técnicas y
            herramientas para llevar tu tatuaje al siguiente nivel. Entendemos
            que cada tatuaje es una expresión personal y estamos aquí para
            guiarte en cada paso del proceso, asegurando que tu experiencia sea
            auténtica y significativa.
          </h3>
          <button className="main-btn">View More</button>
        </article>
      </section>
    </main>
  );
}

export default About;
