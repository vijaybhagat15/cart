import React, { useState } from "react";
import whatsappIcon from "../../assets/whatsappIcon.jpg";
import instagramIcon from "../../assets/instagramIcon.jpg";
import pintrestIcon from "../../assets/pintrestIcon.jpg";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Email Validation Function
  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic Email Regex
    if (!email) {
      setError("Email is required!");
    } else if (!emailRegex.test(email)) {
      setError("Enter a valid email address!");
    } else {
      setError("");
      alert("Thank you for subscribing! 🎉");
      setEmail("");
    }
  };

  // Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Exclusive Offer Section */}
        <h2>Get Exclusive Offers on Your Email</h2>
        <p>Subscribe to get the latest updates and special discounts.</p>

        {/* Email Subscription Section with Validation */}
        <div className="subscribe-box">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>

        {/* Show Error Message */}
        {error && <p className="error-message">{error}</p>}

        {/* Social Media Icons */}
        <div className="social-icons">
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a
            href="https://www.pintrest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pintrestIcon} alt="Pintrest" />
          </a>
        </div>

        {/* Company Info */}
        <div className="company-info">
          <p>© 2025 TrendKart. All Rights Reserved.</p>
          <a
            href="https://www.trendkart.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.trendkart.com
          </a>
        </div>
        <button className="go-to-top" onClick={scrollToTop}>
          Go to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
