  /* eslint-disable react/no-unknown-property */
  import React, { useState } from "react";
  import Link from "next/link";
  import noticesData from "../../data/notices.json"; // Make sure this file exists and exports an array of notice objects

  const NoticePage = () => {
    // State for the notices to display.
    // Initially, only the first 3 notices are shown.
    const [displayNotices, setDisplayNotices] = useState(noticesData.slice(0, 3));
    const [heading, setHeading] = useState("Notices");
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (id) => {
      setOpenAccordion(openAccordion === id ? null : id);
    };

    // Quick options array.
    // For "Old Notices", we'll handle it in-page.
    const quickOptions = [
      { name: "Old Notices", type: "oldNotices" },
      { name: "Exam Schedule", link: "/exam-schedule" },
      { name: "CBSE Guidelines", link: "/cbse-guidelines" },
      { name: "Academic Calendar", link: "/academic-calendar" },
    ];

    // When "Old Notices" is clicked, load all notices and update heading.
    const handleOldNotices = () => {
      setDisplayNotices(noticesData);
      setHeading("Old Notices");
    };

    return (
      <div className="container">
        {/* Left Column – Notices Accordion */}
        <div className="leftColumn">
          <h2 className="leftHeading">{heading}</h2>
          <div className="accordion">
            {displayNotices.map((notice) => (
              <div key={notice.id} className="accordionItem">
                <div
                  className="accordionHeader"
                  onClick={() => toggleAccordion(notice.id)}
                >
                  <span className="accordionTitle">{notice.title}</span>
                  <i
                    className={`fa-solid fa-chevron-down accordionIcon ${
                      openAccordion === notice.id ? "rotate" : ""
                    }`}
                  ></i>
                </div>
                <div
                  className="accordionBody"
                  style={{
                    display: openAccordion === notice.id ? "block" : "none",
                  }}
                >
                  <p>{notice.content}</p>
                  <small>Date: {notice.date}</small>
                </div>
              </div>
            ))}
          </div>
          {/* Show a message when all notices are loaded */}
          {displayNotices.length === noticesData.length && (
            <div className="endMessage">
              You have reached the end, have a good day.
            </div>
          )}
        </div>

        {/* Right Column – Quick Options */}
        <div className="rightColumn">
          <h2 className="rightHeading">Quick Links</h2>
          <div className="optionsContainer">
            {quickOptions.map((option) =>
              option.type === "oldNotices" ? (
                <button
                  key={option.name}
                  className="optionLink"
                  onClick={handleOldNotices}
                >
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
          .endMessage {
            margin-top: 20px;
            font-size: 16px;
            font-style: italic;
            color: #666;
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

  export default NoticePage;
