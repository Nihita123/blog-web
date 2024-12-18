import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-md-5 mb-4 mb-md-0">
            <img
              src="https://images.unsplash.com/photo-1465188035480-cf3a60801ea5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fHww"
              alt="About Us"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Right Side - Title and Content */}
          <div className="col-md-7">
            {/* About Title and Intro beside the Image */}
            <div className="about-header mb-4">
              <h2 className="about-title">About Us</h2>
              <p className="about-intro">
                We believe in inspiring journeys that connect people with the
                world.
              </p>
            </div>

            {/* Mission */}
            <h3 className="about-subtitle mb-3">Our Mission</h3>
            <p className="about-description">
              At <strong>Travel Inspire</strong>, our mission is to create a
              platform that empowers travelers with knowledge, tips, and stories
              to plan meaningful adventures. From off-the-beaten-path
              destinations to popular attractions, we provide everything you
              need to explore confidently.
            </p>

            {/* Why Choose Us */}
            <h3 className="about-subtitle mt-4 mb-3">Why Choose Us</h3>
            <ul className="about-list">
              <li>
                <strong>Expert Recommendations:</strong> Insights from
                experienced travelers and local experts.
              </li>
              <li>
                <strong>Personalized Content:</strong> Tailored stories and
                guides for every type of traveler.
              </li>
              <li>
                <strong>Community Engagement:</strong> Join a community that
                shares your passion for exploration.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
