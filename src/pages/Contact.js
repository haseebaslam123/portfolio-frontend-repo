import React, { useState } from "react";
import "./Contact.css";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [isVerified, setIsVerified] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  // Get reCAPTCHA key from .env
  const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  // EmailJS Configuration - Add these to your .env file
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  function onChange(value) {
    console.log("Captcha verified");
    setIsVerified(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!isVerified) {
      alert("Please complete the reCAPTCHA verification");
      return;
    }

    // Check if EmailJS credentials exist
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      alert("EmailJS configuration is missing. Please check your .env file.");
      return;
    }

    setLoading(true);
    const form = e.target;

    // Prepare template parameters for EmailJS
    const templateParams = {
      from_email: form.email.value,
      message: form.message.value,
    };

    console.log("Sending email via EmailJS...");

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", response);

      // Show success popup
      setShowPopup(true);
      form.reset();
      setIsVerified(false);

      // Transition to success screen after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
        setSuccess(true);
      }, 3000);

    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
      setLoading(false);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (success) {
    return (
      <section className="contact-section" id="contact">
        <div className="contact-success">
          <h2>Thanks for getting in touch!</h2>
          <button className="back-to-top-btn" onClick={scrollToTop}>
            BACK TO THE TOP
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-subtitle">
        Ready to get started on your project? <br />
        Contact me now for a Free consultation.
      </p>

      <div className="contact-boxes">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=haseebquotex1021@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-box"
        >
          <span className="icon">📧</span>
          <p>haseebquotex1021@gmail.com</p>
        </a>

        <a
          href="https://wa.me/923184625930"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-box"
        >
          <span className="icon">📞</span>
          <p>(+92) 3184625930</p>
        </a>
      </div>

      <div className="contact-form">
        <h3>Get in touch using the form</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            disabled={showPopup || success || loading}
          />
          <textarea
            name="message"
            placeholder="Send a message to get started."
            required
            disabled={showPopup || success || loading}
          ></textarea>

          <div className="captcha">
            {siteKey ? (
              <ReCAPTCHA sitekey={siteKey} onChange={onChange} />
            ) : (
              <p style={{ color: "red" }}>
                Error: reCAPTCHA site key is missing. Please add REACT_APP_RECAPTCHA_SITE_KEY to your .env file.
              </p>
            )}
          </div>

          {(!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) && (
            <p style={{ color: "red", marginTop: "10px" }}>
              Warning: EmailJS configuration is missing. Please add EmailJS credentials to your .env file.
            </p>
          )}

          <button 
            type="submit" 
            disabled={!isVerified || showPopup || success || loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>

        {showPopup && (
          <div className="popup">
            <div className="success-icon">✓</div>
            <p>Email successfully sent!</p>
            <div className="progress-bar1">
              <div className="progress-fill1"></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}