import React from 'react';
import { Link } from 'react-router-dom';
import '../css/contact.css';

function Contact() {
  return (
    <div className="contact main-contact">
      <div className="contact-info">
        <p>
          You can contact me at the following email address:
        </p>
        <p className="contact email">
          mbielstein2@huskers.unl.edu
        </p>
      </div>
      <div className="home-button">
        <Link to="/" className="contact home-link">Go Back to Home</Link>
      </div>
    </div>
  );
}

export default Contact;
