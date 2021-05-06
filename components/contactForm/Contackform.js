import React from "react";
import emailjs from "emailjs-com";

//import "./ContactUs.css";

export default function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yhy69q8",
        "template_k2vwk0v",
        e.target,
        "user_J5IfuyJBzaj6BeY1Fkouf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="container p-3">
      <h3 className="m-5 text-center text-gradient-style-two">
        {" "}
        Contact with me
      </h3>
      <form className="contact-form" onSubmit={sendEmail}>
        {/* <input type="hidden" name="contact_number" /> */}
        <label
          htmlFor="exampleFormControlInput1"
          className="form-label text-light"
        >
          Name
        </label>
        <input
          type="text"
          name="user_name"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="your name"
          required
        />
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput2"
            className="form-label text-light"
          >
            Email
          </label>
          <input
            type="email"
            name="user_email"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label text-light"
          >
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="message"
            required
          />
          <input type="submit" value="Send" className="btn btn-primary m-4" />
        </div>
      </form>
    </div>
  );
}
