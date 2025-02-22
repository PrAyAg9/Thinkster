"use client"; // Ensures the component runs only on the client

import React from "react";

const AffiliationList = () => {
  const affiliations = [
    {
      id: 1,
      affiliationType: "CBSE",
      affiliationNumber: "123456",
      affiliationDate: "01-04-2015",
      validity: "31-03-2030",
    },
    {
      id: 2,
      affiliationType: "ICSE",
      affiliationNumber: "654321",
      affiliationDate: "12-06-2017",
      validity: "11-06-2032",
    },
    {
      id: 3,
      affiliationType: "State Board",
      affiliationNumber: "112233",
      affiliationDate: "15-09-2010",
      validity: "14-09-2025",
    },
    {
      id: 4,
      affiliationType: "IB",
      affiliationNumber: "445566",
      affiliationDate: "22-11-2018",
      validity: "21-11-2033",
    },
    {
      id: 5,
      affiliationType: "Cambridge",
      affiliationNumber: "778899",
      affiliationDate: "30-07-2016",
      validity: "29-07-2031",
    },
    {
      id: 6,
      affiliationType: "NIOS",
      affiliationNumber: "998877",
      affiliationDate: "05-03-2019",
      validity: "04-03-2034",
    },
    {
      id: 7,
      affiliationType: "International Baccalaureate",
      affiliationNumber: "556677",
      affiliationDate: "10-01-2021",
      validity: "09-01-2036",
    },
    {
      id: 8,
      affiliationType: "Montessori",
      affiliationNumber: "334455",
      affiliationDate: "20-08-2013",
      validity: "19-08-2028",
    },
  ];

  return (
    <section className="affiliation__area pb-25">
      <div className="container">
        <h2 className="text-center text-uppercase font-weight-bold letter-spacing-1 pb-20">
          School Affiliations
        </h2>
        <div className="accordion" id="affiliationAccordion">
          {affiliations.map((aff) => (
            <div key={aff.id} className="accordion-item mb-2">
              <h2 className="accordion-header" id={`affiliation-${aff.id}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#affiliation-content-${aff.id}`}
                  aria-expanded="false"
                  aria-controls={`affiliation-content-${aff.id}`}
                >
                  {aff.affiliationType} Affiliation
                </button>
              </h2>
              <div
                id={`affiliation-content-${aff.id}`}
                className="accordion-collapse collapse"
                aria-labelledby={`affiliation-${aff.id}`}
                data-bs-parent="#affiliationAccordion"
              >
                <div className="accordion-body">
                  <p>
                    <strong>Affiliation Number:</strong> {aff.affiliationNumber}
                  </p>
                  <p>
                    <strong>Affiliation Date:</strong> {aff.affiliationDate}
                  </p>
                  <p>
                    <strong>Validity:</strong> {aff.validity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliationList;
