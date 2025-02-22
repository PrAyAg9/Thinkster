import React, { useState } from "react";

const MandatoryDisclosureContent = () => {
  const [agreements] = useState([
    {
      id: 1,
      agreementType: "Safety and Security",
      documentLink: "/documents/safety_security.pdf",
      validityProof: "/documents/safety_validity.pdf",
      governmentApproval: "/documents/safety_approval.pdf",
      status: "Active",
    },
    {
      id: 2,
      agreementType: "Curriculum Compliance",
      documentLink: "/documents/curriculum_compliance.pdf",
      validityProof: "/documents/curriculum_validity.pdf",
      governmentApproval: "/documents/curriculum_approval.pdf",
      status: "Active",
    },
    {
      id: 3,
      agreementType: "Teacher Qualification",
      documentLink: "/documents/teacher_qualification.pdf",
      validityProof: "/documents/teacher_validity.pdf",
      governmentApproval: "/documents/teacher_approval.pdf",
      status: "Active",
    },
    {
      id: 4,
      agreementType: "Infrastructure Standards",
      documentLink: "/documents/infrastructure_standards.pdf",
      validityProof: "/documents/infrastructure_validity.pdf",
      governmentApproval: "/documents/infrastructure_approval.pdf",
      status: "Active",
    },
    {
      id: 5,
      agreementType: "Student Welfare",
      documentLink: "/documents/student_welfare.pdf",
      validityProof: "/documents/welfare_validity.pdf",
      governmentApproval: "/documents/welfare_approval.pdf",
      status: "Active",
    },
    {
      id: 6,
      agreementType: "Anti-Bullying Policy",
      documentLink: "/documents/anti_bullying.pdf",
      validityProof: "/documents/anti_bullying_validity.pdf",
      governmentApproval: "/documents/anti_bullying_approval.pdf",
      status: "Active",
    },
    {
      id: 7,
      agreementType: "Environmental Sustainability",
      documentLink: "/documents/environmental_sustainability.pdf",
      validityProof: "/documents/environmental_validity.pdf",
      governmentApproval: "/documents/environmental_approval.pdf",
      status: "Active",
    },
    {
      id: 8,
      agreementType: "Parent-Teacher Association",
      documentLink: "/documents/pta_agreement.pdf",
      validityProof: "/documents/pta_validity.pdf",
      governmentApproval: "/documents/pta_approval.pdf",
      status: "Active",
    },
    {
      id: 9,
      agreementType: "Health and Hygiene",
      documentLink: "/documents/health_hygiene.pdf",
      validityProof: "/documents/health_validity.pdf",
      governmentApproval: "/documents/health_approval.pdf",
      status: "Active",
    },
    {
      id: 10,
      agreementType: "Technology Integration",
      documentLink: "/documents/technology_integration.pdf",
      validityProof: "/documents/technology_validity.pdf",
      governmentApproval: "/documents/technology_approval.pdf",
      status: "Active",
    },
    {
      id: 11,
      agreementType: "Community Engagement",
      documentLink: "/documents/community_engagement.pdf",
      validityProof: "/documents/community_validity.pdf",
      governmentApproval: "/documents/community_approval.pdf",
      status: "Active",
    },
  ]);

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  };

  const sectionStyle = {
    marginBottom: "40px",
  };

  const sectionHeadingStyle = {
    fontSize: "28px",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const accordionStyle = {
    maxWidth: "800px",
    margin: "0 auto",
  };

  const accordionItemStyle = {
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    overflow: "hidden",
  };

  // Added position relative so that the badge can be positioned absolutely within the header
  const accordionHeaderStyle = {
    backgroundColor: "#f8f9fa",
    padding: "15px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  };

  const accordionTitleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  };

  const accordionIconStyle = {
    fontSize: "1.2rem",
    transition: "transform 0.3s ease",
  };

  const accordionBodyStyle = {
    padding: "15px",
    fontSize: "16px",
  };

  const linkStyle = {
    color: "#007bff",
    textDecoration: "none",
    display: "block",
    marginBottom: "10px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#f8f9fa",
  };

  // New, reduced badge style placed at the top right corner of the header
  const activeBadgeStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "#28a745",
    color: "white",
    padding: "5px 10px",
    borderRadius: "3px",
    fontSize: "12px",
    fontWeight: "bold",
  };

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div style={containerStyle}>
      <section style={sectionStyle}>
        <h2 className="pb-20" style={sectionHeadingStyle}>
          Disclosure Agreements
        </h2>
        <div style={accordionStyle}>
          {agreements.map((agreement) => (
            <div key={agreement.id} style={accordionItemStyle}>
              <div
                style={accordionHeaderStyle}
                onClick={() => toggleAccordion(agreement.id)}
              >
                <span style={accordionTitleStyle}>
                  {agreement.agreementType} Agreement
                </span>
                <i
                  className={`fa-solid fa-chevron-down ${
                    openAccordion === agreement.id ? "rotate-180" : ""
                  }`}
                  style={accordionIconStyle}
                ></i>
                {/* Conditionally render the active badge when the accordion is open */}
                {openAccordion === agreement.id && (
                  <div style={activeBadgeStyle}>Active</div>
                )}
              </div>
              <div
                style={{
                  ...accordionBodyStyle,
                  display: openAccordion === agreement.id ? "block" : "none",
                }}
              >
                <a
                  href={agreement.documentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  View Document
                </a>
                <a
                  href={agreement.validityProof}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  Proof of Validity
                </a>
                <a
                  href={agreement.governmentApproval}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  Government Approval
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MandatoryDisclosureContent;
