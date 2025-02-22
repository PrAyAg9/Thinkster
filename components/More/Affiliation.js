import React, { useState } from "react";

const AffiliationTable = () => {
  const [affiliations] = useState([
    {
      id: 1,
      affiliationType: "CBSE",
      affiliationNumber: "CBSE-001",
      affiliationDate: "01-04-2015",
      validity: "31-03-2030",
    },
    {
      id: 2,
      affiliationType: "CBSE",
      affiliationNumber: "CBSE-002",
      affiliationDate: "12-06-2016",
      validity: "11-06-2031",
    },
    {
      id: 3,
      affiliationType: "CBSE",
      affiliationNumber: "CBSE-003",
      affiliationDate: "15-09-2017",
      validity: "14-09-2032",
    },
    {
      id: 4,
      affiliationType: "CBSE",
      affiliationNumber: "CBSE-004",
      affiliationDate: "22-11-2018",
      validity: "21-11-2033",
    },
  ]);

  const tableContainerStyle = {
    width: "100%",
    overflowX: "auto",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "center",
    minWidth: "600px",
  };

  const cellStyle = {
    border: "1px solid #ddd",
    padding: "12px",
    whiteSpace: "nowrap",
    fontSize: "16px",
  };

  const headerStyle = {
    ...cellStyle,
    backgroundColor: "transparent",
    fontWeight: "bold",
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headerStyle}>ID</th>
              <th style={headerStyle}>Affiliation Type</th>
              <th style={headerStyle}>Affiliation Number</th>
              <th style={headerStyle}>Affiliation Date</th>
              <th style={headerStyle}>Validity</th>
            </tr>
          </thead>
          <tbody>
            {affiliations.map((affiliation) => (
              <tr key={affiliation.id}>
                <td style={cellStyle}>{affiliation.id}</td>
                <td style={cellStyle}>{affiliation.affiliationType}</td>
                <td style={cellStyle}>{affiliation.affiliationNumber}</td>
                <td style={cellStyle}>{affiliation.affiliationDate}</td>
                <td style={cellStyle}>{affiliation.validity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AffiliationContent = () => {
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };

  const sectionStyle = {
    marginBottom: "40px",
  };

  const sectionHeadingStyle = {
    fontSize: "28px",
    marginBottom: "20px",
  };

  const sectionTextStyle = {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "20px",
  };

  const flexRowStyle = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  };

  const textColumnStyle = {
    flex: "1 1 300px",
    padding: "20px",
    textAlign: "center",
  };

  const imageColumnStyle = {
    flex: "1 1 300px",
    padding: "20px",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "5px",
  };

  return (
    <div style={containerStyle}>
      {/* Overview Section */}
      <section style={sectionStyle}>
        <h2 style={sectionHeadingStyle}>About Our School Affiliations</h2>
        <div style={flexRowStyle}>
          <div style={textColumnStyle}>
            <p style={sectionTextStyle}>
              Our school maintains affiliations with some of the most prestigious educational boards in the country. These affiliations highlight our commitment to academic excellence and integrity.
            </p>
            <p style={sectionTextStyle}>
              Below are the details of our current CBSE affiliations. For more information, please contact the school administration.
            </p>
          </div>
          <div style={imageColumnStyle}>
            <img
              src="assets/img/course/course-2.jpg"
              alt="School Building"
              style={imageStyle}
            />
          </div>
        </div>
      </section>

      {/* Affiliation Details Section */}
      <section style={sectionStyle}>
        <h2 style={sectionHeadingStyle}>Affiliation Details</h2>
        <AffiliationTable />
      </section>
    </div>
  );
};

export default AffiliationContent;
