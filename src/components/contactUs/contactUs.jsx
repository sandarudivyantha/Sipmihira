import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contactUs.css"; // Import the external CSS file

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yeyf5ek",
        "template_cmu1epw",
        form.current,
        "z1rnBQtldB2Hj_P86"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="sipmihira__blog section__padding" id="contactUs">
      <div className="sipmihira__contactUs-container">
        <h2 className="gradient__text">Contact Us</h2>
        <div className="sipmihira__contactUs-container_groupA">
          <div className="StyledContactForm">
            <form ref={form} onSubmit={sendEmail}>
              <label className="formLableHeading">Name</label>
              <input type="text" name="user_name" className="inputFild" />
              <label className="formLableHeading">Email</label>
              <input type="email" name="user_email" />
              <label className="formLableHeading">Message</label>
              <textarea name="message" className="custom-textarea" />
              <input type="submit" value="Send" />
            </form>
          </div>

          <div class="contactDetails">
            <div>
              <p className="contactDetails-p1"><strong>Contact Details</strong></p><br />
              <p className="gradient__text p2">"Your feedback is invaluable to us. Get in touch anytime."</p><br />
              <p className="contactDetails-p3">Hope this project helped you in some manner. Thank you!</p><br />
              <p className="contactDetails-p3"><b>-Team Sipmihira-	</b></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
