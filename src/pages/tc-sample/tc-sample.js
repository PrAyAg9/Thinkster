/* eslint-disable react/no-unknown-property */
import React from "react";

function TcSample() {
  // Replace this with the path/URL to your TC sample PDF file
  const pdfUrl = "/assets/tc-sample.pdf";

  return (
    <div className="tc-container">
      {/* Left Column (70%) – TC Sample */}
      <div className="left-column">
        <div className="tc-card">
          <div className="tc-header">
            <h4>Download TC Sample</h4>
          </div>
          <div className="tc-body">
            <div className="pdf-container">
              <iframe src="/assets/Tc-format.pdf" title="TC PDF Viewer" />
            </div>
            <a href={pdfUrl} download className="download-button">
              Download TC PDF
            </a>
          </div>
        </div>
      </div>

      {/* Right Column (30%) – Guidelines */}
      <div className="right-column">
        <div className="guidelines-card">
          <div className="guidelines-header">
            <h4>TC Sample Guidelines</h4>
          </div>
          <div className="guidelines-body">
            <ul>
              <li>Ensure the TC sample is a clear and legible PDF.</li>
              <li>Verify all mandatory fields are correctly filled.</li>
              <li>Include the official school seal and signature.</li>
              <li>
                The sample should adhere to board-specific guidelines (ICSE,
                CBSE, etc.).
              </li>
              <li>Contact administration for any discrepancies.</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tc-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          display: flex;
          gap: 20px;
          font-family: Arial, sans-serif;
        }
        .left-column {
          flex: 0 0 70%;
        }
        .right-column {
          flex: 0 0 30%;
        }
        .tc-card,
        .guidelines-card {
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .tc-header,
        .guidelines-header {
          background: #3d6ce7;
          padding: 15px;
          color: #fff;
          text-align: center;
        }
        .tc-header h4,
        .guidelines-header h4 {
          margin: 0;
          font-size: 1.5rem;
        }
        .tc-body,
        .guidelines-body {
          padding: 15px;
        }
        .pdf-container {
          height: 800px;
          border: 1px solid #dee2e6;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 15px;
        }
        iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
        .download-button {
          display: inline-block;
          padding: 10px 20px;
          background-color: blue ;
          color: #fff;
          text-decoration: none;
          border-radius: 4px;
          transition: background-color 0.3s ease;
        }
        .download-button:hover {
          background-color: #218838;
        }
        .guidelines-body ul {
          list-style: disc;
          padding-left: 20px;
          margin: 0;
        }
        .guidelines-body ul li {
          margin-bottom: 8px;
          font-size: 1rem;
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .tc-container {
            flex-direction: column;
          }
          .left-column,
          .right-column {
            flex: 0 0 100%;
          }
          .pdf-container {
            height: 500px;
          }
        }
      `}</style>
    </div>
  );
}

export default TcSample;
