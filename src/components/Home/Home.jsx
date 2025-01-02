import "./Home.css";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <section className="home" id="home">
      <Navbar />
      <section className="home-news">
        <article className="home-new">
          <h2>New</h2>
          <h3>Bogota, Colombia</h3>
        </article>
        <article className="home-new">
          <h2>New</h2>
          <h3>Bogota, Colombia</h3>
        </article>
      </section>
      <article className="home-start">
        <h1>John Fajardo</h1>
        <h3>
          Tattoo <span>X</span> Studio
        </h3>
      </article>
    </section>
  );
}

export default Home;
