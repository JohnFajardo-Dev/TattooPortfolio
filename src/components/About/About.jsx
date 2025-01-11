// CSS
import "./About.css";

// REACT ICONS
import { IconContext } from "react-icons";
import { FiCoffee, FiHeart, FiBook } from "react-icons/fi";
function About() {
  return (
    <main id="about">
      <section className="banner">
        <IconContext.Provider value={{ size: "3em" }}>
          <section className="home-banner">
            <article className="home-banner-item">
              <FiCoffee />

              <h2>Coffee</h2>
              <p>
                A hot cup of coffee is the perfect complement to my moments of
                reading, free time or work
              </p>
            </article>
            <article className="home-banner-item">
              <FiHeart />

              <h2>Design</h2>
              <p>
                My passion for drawing extends to tattooing. I enjoy creating
                all kinds of designs and expressing my art
              </p>
            </article>
            <article className="home-banner-item">
              <FiBook />

              <h2>Read</h2>
              <p>
                Reading is part of my daily life, from my free time to my work
                moments it is always present.
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
            Nuestro equipo está comprometido con la excelencia y presta mucha
            atención a cada detalle. Inspirados por influencias locales e
            internacionales, exploran continuamente nuevas técnicas y
            herramientas para llevar tu tatuaje al siguiente nivel. Entendemos
            que cada tatuaje es una expresión personal y estamos aquí para
            guiarte en cada paso del camino, asegurándonos de que tu experiencia
            sea auténtica y significativa.
          </h3>
          <button className="main-btn">View More</button>
        </article>
      </section>
    </main>
  );
}

export default About;
