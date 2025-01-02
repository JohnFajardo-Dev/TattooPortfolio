import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <article className="about-img-cont">
        <img className="about-img" src="tattoomachine.jpg" alt="" />
      </article>
      <article className="about-txt-cont">
        <h2 className="about-txt-title">El CREW</h2>
        <h3 className="about-txt-info">
          Nuestro equipo está comprometido con la excelencia y tiene un ojo
          agudo para cada detalle. Inspirado por influencias locales e
          internacionales, explora continuamente nuevas técnicas y herramientas
          para llevar tu tatuaje al siguiente nivel. Entendemos que cada tatuaje
          es una expresión personal y estamos aquí para guiarte en cada paso del
          proceso, asegurando que tu experiencia sea auténtica y significativa.
        </h3>
        <button className="about-btn">View More</button>
      </article>
    </section>
  );
}

export default About;
