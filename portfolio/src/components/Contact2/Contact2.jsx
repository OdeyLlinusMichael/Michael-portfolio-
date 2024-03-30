import React, { useState } from 'react';
import './Contact2.css';
import emailjs from 'emailjs-com';

const Contact2 = () => {
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ao40j6x', 'template_l1rh7cu', e.target, '3J5MPwv4Fyb9FT4Q2')
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          setSent(true); // Set sent state to true
          setTimeout(() => {
            setSent(false); // Reset sent state after 3 seconds
          }, 3000);
          e.target.reset(); // Reset form fields
        },
        (error) => {
          console.error('Email sending failed:', error.text);
        }
      );
  };

  return (
    
    <section id="contact" className="section bg-primary">
  <div className="container5">
    <div className="row">
      <div className="col-lg-q text-center text-lg-start">
        <h2 className="text-10 fw-600 mb-5">Let's get in touch</h2>
        <p className="text-5 mb-5">I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.</p>
        <h3 className="text-5 fw-600">Living In:</h3>
        <address className="text-4">
          11b Olatunji Moore Street by Lagos Nigeria
        </address>
        <h3 className="text-5 fw-600">Call:</h3>
        <p className="text-4">(+234) 8105832126</p>
        <h3 className="text-5 fw-600">WhatsApp:</h3>
        <p className="text-4">(+234) 8096519670</p>
        <ul className="social-icons social-icons-lg justify-content-center justify-content-lg-start mt-5">
        </ul>
      </div>
      <div className="col-lg-6q ms-auto mt-5 mt-lg-0" data-wow-delay="0.3s">
        <h2 className="text-10">Estimate your Project?</h2>
        <form className="kk1" onSubmit={sendEmail}>
          <div className="input-bx">
            <input type="text" name="user_name" required />
            <span>What Is Your Name?</span>
          </div>
          <div className="input-bx">
            <input type="email" name="user_email" required />
            <span>Your Email Address</span>
          </div>
          <div className="input-bx">
            <textarea name="message" required rows="6"></textarea>
            <span>How Can I Help You?</span>
          </div>
          <button type="submit" className="button">Submit</button>
        </form>
      </div>
    </div>
  </div>
  {/* Pop-up message */}
  {sent && <div className="popup-message">Message Sent!</div>}
</section>
    
  );
};

export default Contact2;
