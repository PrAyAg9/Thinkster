/* eslint-disable react/no-unknown-property */
    "use client";

import React from "react";

const SchoolAtGlance = () => {
  return (
    <section className="blog__area pt-20 pb-60">
      <div className="container">
        <div className="row">
          {/* Left Section (70%) */}
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="postbox__wrapper postbox__details pr-20 box-left">
              <div className="postbox__item transition-3 mb-70">
                <h3 className="postbox__title">Welcome to Modern Indian School</h3>
                <div className="postbox__text mb-40">
                  <p>
                    Modern Indian School is dedicated to nurturing excellence in academics and holistic development. Our campus is a hub of innovation, creativity, and rigorous education.
                  </p>
                </div>
                <h4 className="postbox__title">Campus Overview</h4>
                <div className="postbox__video mb-40">
                  <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Campus Tour"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          {/* Right Sidebar (30%) */}
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="postbox__wrapper postbox__details pl-20 box-right">
              <div className="postbox__item transition-3 mb-70">
                <h3 className="postbox__title">School Activities</h3>
                <div className="postbox__text mb-40">
                  <ul className="tagcloud list-unstyled school-activities">
                    <li>
                      <a href="#">Annual Cultural Fest</a>
                    </li>
                    <li>
                      <a href="#">Inter-school Sports Meet</a>
                    </li>
                    <li>
                      <a href="#">Science &amp; Robotics Competitions</a>
                    </li>
                    <li>
                      <a href="#">Community Outreach Programs</a>
                    </li>
                    <li>
                      <a href="#">Innovative Teaching Workshops</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .blog__area {
          background-color: #f9f9f9;
          padding:10px;
        }
        .box-left,
        .box-right {
          padding:10px;
          border-radius: 8px;
        }
        .postbox__title {
          font-size: 2rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 20px;
          text-align: left;
        }
        .postbox__text p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #555;
          margin-bottom: 20px;
          text-align: left;
        }
        .school-activities li {
          font-size: 1.1rem;
          margin-bottom: 10px;
          margin-left: 10px;
          text-align: left;
        }
        .school-activities li a {
          color: #007bff;
          text-decoration: none;
          font-weight: 600;
        }
        .school-activities li a:hover {
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
};

export default SchoolAtGlance;
