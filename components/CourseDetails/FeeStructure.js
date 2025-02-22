/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const FeeStructureScholarship = () => {
  const [feeStructures] = useState([
    {
      id: 1,
      groupName: "Nursery",
      academicFees: "Rs. 10,000",
      examFees: "Rs. 1,000",
      extracurricularFees: "Rs. 500",
      otherFees: "Rs. 200",
    },
    {
      id: 2,
      groupName: "1st to 5th",
      academicFees: "Rs. 15,000",
      examFees: "Rs. 1,500",
      extracurricularFees: "Rs. 800",
      otherFees: "Rs. 300",
    },
    {
      id: 3,
      groupName: "6th to 8th",
      academicFees: "Rs. 20,000",
      examFees: "Rs. 2,000",
      extracurricularFees: "Rs. 1,000",
      otherFees: "Rs. 500",
    },
    {
      id: 4,
      groupName: "9th to 12th",
      academicFees: "Rs. 25,000",
      examFees: "Rs. 2,500",
      extracurricularFees: "Rs. 1,500",
      otherFees: "Rs. 800",
    },
  ]);

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="container">
      {/* Left Column - Fee Structure Accordion */}
      <div className="leftColumn">
        <h2 className="leftHeading">Fee Structure</h2>
        <div className="accordion">
          {feeStructures.map((fee) => (
            <div key={fee.id} className="accordionItem">
              <div
                className="accordionHeader"
                onClick={() => toggleAccordion(fee.id)}
              >
                <span className="accordionTitle">
                  {fee.groupName} Fee Structure
                </span>
                <i
                  className={`fa-solid fa-chevron-down accordionIcon ${
                    openAccordion === fee.id ? "rotate" : ""
                  }`}
                ></i>
              </div>
              <div
                className="accordionBody"
                style={{
                  display: openAccordion === fee.id ? "block" : "none",
                }}
              >
                <table>
                  <thead>
                    <tr>
                      <th>Academic Fees</th>
                      <th>Exam Fees</th>
                      <th>Extracurricular Fees</th>
                      <th>Other Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{fee.academicFees}</td>
                      <td>{fee.examFees}</td>
                      <td>{fee.extracurricularFees}</td>
                      <td>{fee.otherFees}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - Scholarship Section */}
      <div className="rightColumn">
        <h2 className="rightHeading">Scholarship Program</h2>
        <div className="scholarshipContent">
          <p>
            Our Scholarship Program is designed to reward academic excellence
            and support deserving students financially. We offer a range of
            scholarships based on merit and need.
          </p>
          <p>
            For more details on eligibility criteria, the application process,
            and benefits, please review our scholarship guidelines. If you meet
            the criteria, we encourage you to apply.
          </p>
          <Link href="#" passHref legacyBehavior>
            <a className="scholarshipButton">Apply for Scholarship</a>
          </Link>
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
          background-color: #f8f9fa;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
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
        table {
          width: 100%;
          border-collapse: collapse;
        }
        table th,
        table td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: center;
        }
        .rightHeading {
          font-size: 24px;
          margin-bottom: 20px;
          color: #333;
          font-weight: bold;
        }
        .scholarshipContent p {
          margin-bottom: 15px;
          font-size: 16px;
          color: #555;
        }
        .scholarshipButton {
          display: inline-block;
          padding: 10px 15px;
          background-color: #3d6ce7;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
          font-size: 16px;
        }
        /* Responsive Styles */
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }
          .leftColumn,
          .rightColumn {
            flex: 0 0 100%;
          }
          .rightColumn {
            margin-top: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default FeeStructureScholarship;
