/* eslint-disable react/no-unknown-property */
"use client"; // Ensures client-side rendering

import React, { useState } from "react";
import Image from "next/image";

let pagetitle;

const InfrastructurePage = () => {
  const accordionItems = [
    {
      id: 1,
      title: "Special Sports Ground",
      content:
        "Our state-of-the-art sports ground offers facilities for football, cricket, athletics, and more. The field is maintained to the highest standards and is used for both practice and competitions.",
    },
    {
      id: 2,
      title: "Olympic-size Swimming Pool",
      content:
        "The swimming pool is designed to meet international standards, providing a safe and competitive environment for our students to excel in swimming and water sports.",
    },
    {
      id: 3,
      title: "Dedicated Music Room",
      content:
        "Our music room is equipped with professional instruments and sound systems, encouraging students to explore their musical talents and creativity.",
    },
    {
      id: 4,
      title: "Serene Yoga & Meditation Area",
      content:
        "This tranquil space offers a peaceful setting for yoga and meditation, helping students relieve stress and focus on their mental well-being.",
    },
    {
      id: 5,
      title: "Modern Central AC Classrooms",
      content:
        "Our classrooms are designed with central air conditioning and modern learning aids to ensure a comfortable and effective educational environment.",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="infrastructure-container ">
      {/* Top Image Section */}
      <div className="top-image">
        <Image
          src="/assets/img/campus1/campus-1.jpg"
          alt="Our Infrastructure"
          width={1200}
          height={500}
          layout="responsive"
          objectFit="cover"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="content">
        <h2 className="page-title">School At Glance</h2>
        <p className="intro">
          Discover our state-of-the-art campus facilities designed to provide the
          perfect environment for academic excellence and holistic development.
          From modern sports arenas to dedicated creative spaces, every element is
          crafted to inspire and nurture our students.
        </p>

        {/* Accordion List */}
        <div className="accordion pb-30">
          {accordionItems.map((item) => (
            <div key={item.id} className="accordion-item">
              <button
                className="accordion-header"
                onClick={() => toggleAccordion(item.id)}
                aria-expanded={openAccordion === item.id}
              >
                <h3 className="accordion-title">{item.title}</h3>
                <span className="accordion-icon">
                  {openAccordion === item.id ? "−" : "+"}
                </span>
              </button>
              <div
                className={`accordion-body ${
                  openAccordion === item.id ? "open" : ""
                }`}
              >
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styled JSX for Better Performance */}
      <style jsx>{`
        .infrastructure-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .top-image {
          margin-bottom: 30px;
        }
        .content {
          padding: 0 20px;
        }
        .page-title {
          font-size: 28px;
          color: #333;
          font-weight: bold;
          text-align: center;
          margin-bottom: 15px;
        }
        .intro {
          font-size: 16px;
          color: #555;
          line-height: 1.6;
          text-align: center;
          margin-bottom: 30px;
        }
        .accordion {
          border-top: 1px solid #ddd;
        }
        .accordion-item {
          border-bottom: 1px solid #ddd;
        }
        .accordion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 15px;
          background: #f8f9fa;
          border: none;
          cursor: pointer;
          text-align: left;
        }
        .accordion-title {
          font-size: 18px;
          color: #333;
          margin: 0;
        }
        .accordion-icon {
          font-size: 24px;
          font-weight: bold;
          color: #3d6ce7;
        }
        .accordion-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-in-out;
          background: #fff;
          font-size: 16px;
          color: #555;
          padding: 0 15px;
        }
        .accordion-body.open {
          max-height: 300px;
          padding: 15px;
        }
        @media (max-width: 768px) {
          .page-title {
            font-size: 24px;
          }
          .intro,
          .accordion-body {
            font-size: 14px;
          }
          .accordion-title {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default InfrastructurePage;
