import React from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const handleSubmit = (e) => {
    emailjs.init("q7xnBnzBJbMFK-MJO");
    e.preventDefault();

    e.target.contact_number.value = (Math.random() * 100000) | 0;
    emailjs.sendForm("service_h1rag2r", "template_11bhhk5", e.target).then(
      function (res) {
        console.log("Success", res.status, res.text);
        
      },
      function (err) {
        console.log("Failed", err);
      }
      
    );
    alert("Thank you for your message. I will be sure to reply as soon as possible.");
    window.location.reload()
  };

  return (
    <div className="contact">
      <p className="form">
        I am excited about potential job opportunities and encourage employers
        to reach out to me with any questions or to schedule an interview.
        Please feel free to contact me through the form below, or click one of 
        the links provided.
      </p>

      <form onSubmit={handleSubmit} className="form contact">
        <input type="hidden" name="contact_number"/>

        <p className="form">
          <label className="form" htmlFor="name">
            Name:{" "}
          </label>
          <input type="text" name="name" placeholder="Name" />
        </p>

        <p className="form">
          <label htmlFor="company" className="form">
            Company: <input name="company" type="text" placeholder="Company" />
          </label>
        </p>

        <p className="form">
          <label className="form" htmlFor="email">
            E-Mail:{" "}
          </label>
          <input name="email" type="text" placeholder="E-Mail" />
        </p>

        <p className="form">
          <label htmlFor="phone" className="form">
            Phone Number:{" "}
          </label>
          <input name="phone" placeholder="Phone Number" />
        </p>

        <p className="form">
          <label htmlFor="message" className="form">
            Message
          </label>
        </p>

        <p className="form">
          <textarea
            id="message"
            name="message"
            type="text"
            placeholder="Your Message"
          ></textarea>
        </p>

        <p className="form">
          <input id='submit' className='form' type="image" src='../assets/submit-button.png' alt='Submit' />
        </p>
        
      </form>
      <h3 className='form'>E-Mail</h3>
      <p className='form'>
        <a
        className='form'
        targert='_blank'
        href='mailto:dirksen.christopher@gmail.com'
        >
          dirksen.christopher@gmail.com
        </a>
      </p>
      <h3 className="form">GitHub</h3>
      <p className="form">
        <a
          className="form"
          target="_blank"
          href="https://github.com/ChrispyRice024"
        >
          https://github.com/ChrispyRice024
        </a>
      </p>
      <p></p>
      <h3 className="form">LinkedIn</h3>
      <p className="form">
        <a
          className="form"
          target="_blank"
          href="https://www.linkedin.com/in/christopher-dirksen"
        >
          www.linkedin.com/in/christopher-dirksen
        </a>
      </p>
    </div>
  );
}
