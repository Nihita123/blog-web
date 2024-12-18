import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light pt-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5>About Us</h5>
            <p>
              We provide curated travel experiences and inspiration for
              explorers. Discover unique destinations, travel guides, and tips
              to make your journeys unforgettable.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light">
                  Home
                </a>
              </li>
              <li>
                <a href="/blogs" className="text-light">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/about" className="text-light">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 mb-4">
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-light me-3"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-light me-3"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-light me-3"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-light"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-3 border-top pt-3">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Travel Inspiration Blog. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
