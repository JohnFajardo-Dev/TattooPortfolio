// CSS
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <article className="contact-img-cont">
        <img src="./contact.jpg" alt="" className="contact-img" />
      </article>
      <article className="contact-txt-cont">
        <form action="" className="contact-form">
          <label>Hello!!!</label>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button className="main-btn">Submit</button>
        </form>
      </article>
    </section>
  );
}

export default Contact;
