/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import Link from "next/link";
import cbseGuidelinesData from "../../../data/cbse_guidelines.json"; // Ensure correct path

const CBSEGuidelines = () => {
  // State for displaying CBSE Guidelines.
  const [displayGuidelines, setDisplayGuidelines] = useState([]);
  const [heading, setHeading] = useState("Notices");
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  // Quick Links including CBSE Guidelines option
  const quickOptions = [
    { name: "Old Notices", link: "/notice" },
    { name: "Exam Schedule", link: "/exam-schedule" },
    { name: "CBSE Guidelines", type: "cbseGuidelines" },
    { name: "Academic Calendar", link: "/academic-calendar" },
  ];

  // Load CBSE Guidelines when the option is clicked
  const handleCBSEGuidelines = () => {
    setDisplayGuidelines(cbseGuidelinesData);
    setHeading("CBSE Guidelines");
  };

  return (
    <div className="container">
      {/* Left Column – CBSE Guidelines Accordion */}
      <div className="leftColumn">
        <h2 className="leftHeading">{heading}</h2>
        {displayGuidelines.length === 0 ? (
          <p className="info-text">
            Click &quot;CBSE Guidelines&quot; from Quick Links to view details.
          </p>
        ) : (
          <div className="accordion">
            {displayGuidelines.map((item) => (
              <div key={item.id} className="accordionItem">
                <div className="accordionHeader" onClick={() => toggleAccordion(item.id)}>
                  <span className="accordionTitle">{item.title}</span>
                  <i
                    className={`fa-solid fa-chevron-down accordionIcon ${
                      openAccordion === item.id ? "rotate" : ""
                    }`}
                  ></i>
                </div>
                <div className="accordionBody" style={{ display: openAccordion === item.id ? "block" : "none" }}>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Column – Quick Links */}
      <div className="rightColumn">
        <h2 className="rightHeading">Quick Links</h2>
        <div className="optionsContainer">
          {quickOptions.map((option) =>
            option.type === "cbseGuidelines" ? (
              <button key={option.name} className="optionLink" onClick={handleCBSEGuidelines}>
                {option.name}
              </button>
            ) : (
              <Link key={option.name} href={option.link} passHref legacyBehavior>
                <a className="optionLink">{option.name}</a>
              </Link>
            )
          )}
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          font-family: Arial, sans-serif;
          display: flex;
          gap: 20px;
        }
        .leftColumn {
          flex: 0 0 70%;
        }
        .rightColumn {
          flex: 0 0 30%;
        }
        .leftHeading {
          font-size: 28px;
          margin-bottom: 20px;
          color: #333;
          font-weight: bold;
        }
        .accordion {
          margin-top: 20px;
        }
        .accordionItem {
          margin-bottom: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          overflow: hidden;
        }
        .accordionHeader {
          background-color: #f8f9fa;
          padding: 15px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .accordionTitle {
          font-size: 18px;
          font-weight: bold;
          color: #333;
        }
        .accordionIcon {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }
        .accordionIcon.rotate {
          transform: rotate(180deg);
        }
        .accordionBody {
          padding: 15px;
          font-size: 16px;
          background-color: #fff;
        }
        .info-text {
          font-size: 1rem;
          color: #666;
          text-align: center;
          margin-top: 20px;
        }
        .rightHeading {
          font-size: 24px;
          margin-bottom: 20px;
          color: #333;
          font-weight: bold;
        }
        .optionsContainer {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 20px;
        }
        .optionLink {
          text-decoration: none;
          color: #3d6ce7;
          font-size: 16px;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background-color: #f8f9fa;
          text-align: center;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }
          .leftColumn,
          .rightColumn {
            flex: 0 0 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default CBSEGuidelines;
