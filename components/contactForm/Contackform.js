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
    <div class="container p-3">
      <h3 class="m-5 text-center text-gradient-style-two"> Contact with me</h3>
      <form className="contact-form" onSubmit={sendEmail}>
        {/* <input type="hidden" name="contact_number" /> */}
        <label for="exampleFormControlInput1" class="form-label text-light">
          Name
        </label>
        <input
          type="text"
          name="user_name"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="your name"
          required
        />
        <div className="mb-3">
          <label for="exampleFormControlInput2" class="form-label text-light">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            class="form-control"
            id="exampleFormControlInput2"
            placeholder="name@example.com"
            required
          />
        </div>
        <div class="mb-3">
          <label
            for="exampleFormControlTextarea1"
            class="form-label text-light"
          >
            Message
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="message"
            required
          />
          <input type="submit" value="Send" class="btn btn-primary m-4" />
        </div>
      </form>
    </div>
  );
}
