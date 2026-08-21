import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container bottom-in">
        <div className="footer-content">
          <div className="footer-abt-holder">
            <figure>
              <img src="/assets/images/footer-logo.png" alt="Why work with us" />
            </figure>
            <p>
              We are here to assist you with cutting-edge mechanical solutions
              for your projects.
            </p>
          </div>
          <div className="contact-holder">
            <h4>Contact</h4>
            <p>We are here to assist you</p>
            <p>
              Tel: <a href="tel:+966 53 057 5677">+966 55 096 0093</a>
              <br />
              Email:{" "}
              <a href="mailto:info@energizese.com">info@energizese.com </a>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61586308836327"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/uploads/a0b30cfc04a8bbdd.png"
                    width="53"
                    height="53"
                    alt="Facebook"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/109674092/admin/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BNobN4rB4S52TMj18jh6qdQ%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/uploads/77fea22afde395aa.png"
                    width="53"
                    height="53"
                    alt="Linked in"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/uploads/0eb574162fe98217.png"
                    width="53"
                    height="53"
                    alt="X"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/uploads/cfb645dd6762876d.png"
                    width="53"
                    height="53"
                    alt="YouTube"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/energizese.group/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/uploads/ef5202c7746066e1.png"
                    width="53"
                    height="53"
                    alt="Instagram"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="explore-holder">
            <h4>Explore</h4>
            <menu>
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about-us.html">About Us</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="projects.html">Projects</a>
                </li>
                <li>
                  <a href="contact-us.html">Contact Us</a>
                </li>
              </ul>
            </menu>
          </div>
        </div>
        <div className="copy-right">
          <p>©2025 Energizese. All Rights Reserved</p>
          <div className="privacy-links">
            <a href="privacy-policy.html">Privacy Policy</a> |{" "}
            <a href="terms-of-use.html">Terms of use</a>
          </div>
          <ul>
            <li>Designed and developed by</li>
            <li>
              <figure>
                <a
                  href="https://unixwebsolutions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/images/unix-logo.png"
                    width="79"
                    height="21"
                    alt="Unixweb Solutions"
                  />
                </a>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
