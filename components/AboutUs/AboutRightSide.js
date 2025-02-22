// components/AboutUs/AboutRightSide.js
import React from "react";

const AboutRightSide = () => {
  return (
    <div className="about__sidebar">
      {/* Wide Search Bar */}
      <div className="widget widget-search mb-40">
        <form action="#" className="search-form">
          <input 
            type="search" 
            placeholder="Search ..." 
            aria-label="Search" 
            className="search-input"
            style={{
              width: "100%",
              padding: "12px 15px",
              fontSize: "16px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              boxSizing: "border-box"
            }}
          />
        </form>
      </div>
      
      {/* Promotional Widget */}
      <div className="widget widget-facilities mb-40">
        <div 
          className="facilities-box" 
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "4px",
            background: "#f9f9f9",
            textAlign: "center"
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>Why Choose Us?</h3>
          <p style={{ marginBottom: "10px" }}>
            Our school provides the best facilities to ensure a holistic development of every student.
          </p>
          <h4 style={{ color: "#007bff", marginBottom: "10px" }}>
            100% Success Rate
          </h4>
          <p style={{ marginBottom: "20px" }}>
            Proudly achieving a 100% success rate for the past 12 years and still going strong!
          </p>
          <a 
            href="#" 
            className="btn btn-primary" 
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "4px"
            }}
          >
            Learn More
          </a>
        </div>
      </div>
      
      {/* Perks Widget */}
      <div className="widget widget-perks">
        <div 
          className="perks-box" 
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "4px",
            background: "#f9f9f9",
            textAlign: "left",
            marginTop: "40px"
          }}
        >
          <h3 style={{ marginBottom: "15px", color: "#000000" }}>Our Perks</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
              <i className="fas fa-check-circle" style={{ color: "#007bff", marginRight: "10px" }}></i>
              100% Qualified Teachers
            </li>
            <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
              <i className="fas fa-check-circle" style={{ color: "#007bff", marginRight: "10px" }}></i>
              Best Supporting Staff
            </li>
            <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
              <i className="fas fa-check-circle" style={{ color: "#007bff", marginRight: "10px" }}></i>
              Modern Infrastructure &amp; Facilities
            </li>
            <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
              <i className="fas fa-check-circle" style={{ color: "#007bff", marginRight: "10px" }}></i>
              Numerous Extracurricular Opportunities
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutRightSide;
