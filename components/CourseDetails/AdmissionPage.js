/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const AdmissionPage = () => {
  // Admission step-by-step process
  const admissionSteps = [
    {
      id: 1,
      step: "Step 1: Online Application",
      description:
        "Parents begin by filling out our online application form with the required student and family details.",
    },
    {
      id: 2,
      step: "Step 2: Document Submission",
      description:
        "Submit all necessary documents such as previous academic records, birth certificate, and proof of residence.",
    },
    {
      id: 3,
      step: "Step 3: Entrance Test",
      description:
        "Eligible students are invited to appear for an entrance test designed to assess their academic potential.",
    },
    {
      id: 4,
      step: "Step 4: Interview",
      description:
        "Shortlisted candidates along with their parents will attend an interview with our admission panel.",
    },
    {
      id: 5,
      step: "Step 5: Final Selection",
      description:
        "The final list of admitted students is announced and further enrollment instructions are provided.",
    },
  ];

  // Accordion items covering additional admission details
  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const accordionItems = [
    {
      id: 1,
      title: "Admission Requirements",
      content:
        "Applicants must provide proof of residence, previous school records, a birth certificate, and a recommendation letter. All documents should be original and up to date.",
    },
    {
      id: 2,
      title: "Admission Process Overview",
      content:
        "Our admissions process is transparent and designed to identify students who will thrive in our academic environment. It includes an application review, document verification, entrance test, and a personal interview.",
    },
    {
      id: 3,
      title: "Fee Structure & Scholarships",
      content:
        "We offer competitive fee structures along with various scholarship programs based on merit and financial need. Detailed information can be found on our website.",
    },
  ];

  return (
    <div className="container">
      {/* Left Column - Admission Process & Details */}
      <div className="leftColumn">
        <h2 className="leftHeading">Admission Process</h2>
        <div className="steps">
          {admissionSteps.map((item) => (
            <div key={item.id} className="step">
              <h3>{item.step}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <h2 className="accordionHeading">Admission Details</h2>
        <div className="accordion">
          {accordionItems.map((item) => (
            <div key={item.id} className="accordionItem">
              <div
                className="accordionHeader"
                onClick={() => toggleAccordion(item.id)}
              >
                <span className="accordionTitle">{item.title}</span>
                <i
                  className={`fa-solid fa-chevron-down accordionIcon ${
                    openAccordion === item.id ? "rotate" : ""
                  }`}
                ></i>
              </div>
              <div
                className="accordionBody"
                style={{
                  display: openAccordion === item.id ? "block" : "none",
                }}
              >
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - Apply for Admission Section */}
      <div className="rightColumn">
        <h2 className="rightHeading">Apply for Admission</h2>
        <div className="applySection">
          <p>
            Join our esteemed institution where we nurture academic excellence
            and holistic development. Our modern facilities, experienced
            faculty, and a supportive environment make us the ideal choice for
            your child&apos;s future.
          </p>
          <p>
            Take the first step towards a bright future—apply now and be a part
            of our vibrant learning community!
          </p>
          <Link href="/apply-admission" passHref legacyBehavior>
            <a className="applyButton">Start Your Application</a>
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
        .steps {
          margin-bottom: 30px;
        }
        .step {
          margin-bottom: 20px;
          padding: 10px 15px;
          border-left: 3px solid #3d6ce7;
          background: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .step h3 {
          font-size: 20px;
          margin-bottom: 5px;
          color: #3d6ce7;
        }
        .step p {
          font-size: 16px;
          color: #555;
        }
        .accordionHeading {
          font-size: 24px;
          margin: 30px 0 20px;
          color: #333;
          font-weight: bold;
        }
        .accordion {
          margin-top: 10px;
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
        .rightHeading {
          font-size: 24px;
          margin-bottom: 20px;
          color: #333;
          font-weight: bold;
        }
        .applySection p {
          font-size: 16px;
          color: #555;
          margin-bottom: 15px;
        }
        .applyButton {
          display: inline-block;
          padding: 10px 15px;
          background-color: #3d6ce7;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
          font-size: 16px;
          transition: background-color 0.3s ease;
        }
        .applyButton:hover {
          background-color: #345bb2;
        }
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

export default AdmissionPage;
