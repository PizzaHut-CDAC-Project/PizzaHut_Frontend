import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import "./Footer.css";
import facebook from "../../images/facebook.png";
import youtube from "../../images/youtube.png";
import instagram from "../../images/instagram.png";
import ios from "../../images/ios.svg";
import playstore from "../../images/playstore.png";
import fssai from "../../images/fssai.svg";

export default function Footer() {
  const navigate = useNavigate();

  const socialLinks = [
    { href: "https://www.facebook.com/", image: facebook, alt: "Facebook" },
    { href: "https://www.youtube.com/", image: youtube, alt: "Youtube" },
    { href: "https://www.instagram.com/", image: instagram, alt: "Instagram" },
  ];

  const appLinks = [
    { href: "#", image: ios, alt: "iOS" },
    { href: "#", image: playstore, alt: "Playstore" },
  ];

  const legalLinks = [
    { to: "/Terms-and-condition", text: "Terms and Conditions" },
  ];

  const aboutLinks = [
    { to: "/FAQs", text: "FAQ's" },
    { to: "/aboutUs", text: "About Us" },
  ];

  const renderLinks = (links) => (
    links.map((link, index) => (
      <tr key={index}>
        <a className="footerLink" onClick={() => navigate(link.to)}>
          {link.text}
        </a>
      </tr>
    ))
  );


  return (
    <footer className="footer" style={{ overflowX: "hidden" }}>
      <div className="link-row"> 
        <div className="footer-section"> 
          <h5>About</h5>
          <table>
            <tbody>
              {renderLinks(aboutLinks)}
            </tbody>
          </table>
        </div>
        <div className="footer-section">
          <h5>Legal</h5>
          <table>
            <tbody>
             {renderLinks(legalLinks)}
            </tbody>
          </table>
        </div>
        <div className="footer-section">
          <h5>Social Media</h5>
          <div className="social-icons"> {/* Wrap icons for better styling */}
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer"> {/* Add rel="noopener noreferrer" for security */}
                <img src={link.image} alt={link.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="app-links">
        {appLinks.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            <img src={link.image} alt={link.alt} style={{ height: "50px" }} />
          </a>
        ))}
      </div>

      <div className="feedback-section">
        <h6>
          Help us in serving you better
          <motion.button
            className="feedback-btn"
            whileHover={{ backgroundColor: "gray", color: "white" }}
            onClick={() => navigate("/Feedback")}
          >
            Give Feedback
          </motion.button>
        </h6>
      </div>

      <div className="info-section">
        <p> {/* Use <p> tags for paragraphs */}
          Order a delicious pizza on the go, anywhere, anytime. pizzaStory is
          happy to assist you with your home delivery. Every time you order, you
          get a hot and fresh pizza delivered at your doorstep in less than
          thirty minutes. *T&C Apply.
        </p>
        <p>Hurry up and place your order now!</p>

      </div>

      <div className="fssai-logo">
        <img
          src={fssai}
          alt="fssai"
          style={{ height: "100px", backgroundColor: "white", borderRadius: "10px" }}
        />
      </div>
    </footer>
  );
}