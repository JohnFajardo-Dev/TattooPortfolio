// CSS
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <article className="contact-img-cont">
        <img src="./contact.jpg" alt="" className="contact-img" />
      </article>
      <article className="contact-txt-cont">
        <form action="" className="contact-form">
          <h1>Hello!!!</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad in
            facere iste. Voluptate modi saepe quos repudiandae debitis quae ad
            dolor quidem cumque quis animi minima
          </h3>
          <input type="text" placeholder="Enter Your Name" />
          <input type="text" placeholder="Enter your email" />
          <input type="text" placeholder="Enter your message" />
          <button className="main-btn">Submit</button>
        </form>
      </article>
    </section>
  );
}

export default Contact;
