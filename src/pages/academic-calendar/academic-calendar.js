/* eslint-disable react/no-unknown-property */
import React from "react";
import { useRouter } from "next/router";

const AcademicCalendar = () => {
  const router = useRouter();

  return (
    <div className="container">
      {/* Header with Back Button */}
      <div className="header">
        <button className="back-button" onClick={() => router.push("/notice")}>
          ← Back
        </button>
        <h1 className="page-title">Academic Calendar</h1>
      </div>

      {/* PDF Embed */}
      <div className="pdf-wrapper">
        <iframe
          src="/assets/academic-calendar.pdf" // Make sure this matches your public folder path
          width="90%"
          height="650px"
          className="pdf-frame"
        />
      </div>

      {/* Message Below */}
      <p className="success-message">
        Wishing you a very happy and successful academic year! 🎓✨
      </p>

      <style jsx>{`
        .container {
          max-width: 1100px;
          margin: 40px auto;
          padding: 20px;
          font-family: Arial, sans-serif;
          text-align: center;
        }
        .header {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-bottom: 20px;
        }
        .page-title {
          font-size: 2rem;
          color: #333;
          margin: 0;
        }
        .back-button {
          position: absolute;
          left: 0;
          background-color: #007bff;
          color: white;
          padding: 8px 12px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
        }
        .back-button:hover {
          background-color: #0056b3;
        }
        .pdf-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px 0;
        }
        .pdf-frame {
          border: 1px solid #ddd;
          border-radius: 5px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .success-message {
          font-size: 1.3rem;
          font-weight: bold;
          margin-top: 20px;
          color: #28a745;
        }
        @media (max-width: 768px) {
          .page-title {
            font-size: 1.8rem;
          }
          .back-button {
            font-size: 0.9rem;
            padding: 6px 10px;
          }
          .pdf-frame {
            width: 100%;
            height: 500px;
          }
        }
      `}</style>
    </div>
  );
};

export default AcademicCalendar;
