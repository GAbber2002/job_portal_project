import React from "react";
import { Link } from "react-router-dom";
import "./home.css"; // link custom CSS

function Home() {
  return (
    <div className="home-wrapper">
      <div className="hero-section">
        <h1>Find Your Dream Job</h1>
        <p>Connect with top companies. Post and apply to jobs in seconds.</p>
        <div className="cta-buttons">
          <Link to="/register" className="btn-primary">Get Started</Link>
          <Link to="/jobs" className="btn-outline">Browse Jobs</Link>
        </div>
      </div>

      <div className="features-section">
        <h2>Why Use Our Job Portal?</h2>
        <div className="features">
          <div className="feature-card">
            <h3>For Job Seekers</h3>
            <p>Create your profile, upload your resume, and apply in one click.</p>
          </div>
          <div className="feature-card">
            <h3>For Employers</h3>
            <p>Post jobs, review applications, and connect with top talent.</p>
          </div>
          <div className="feature-card">
            <h3>Free & Fast</h3>
            <p>Completely free to use. Get started in less than 60 seconds.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
