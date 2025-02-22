/* eslint-disable react/no-unknown-property */
import React from "react";
import { useRouter } from "next/router";

const ExamSchedule = () => {
  const router = useRouter();

  // 10th Boards Final Exam Schedule
  const boardExams = [
    { id: 1, subject: "Mathematics", date: "2025-06-15", time: "10:00 AM - 1:00 PM", venue: "Main Hall" },
    { id: 2, subject: "Science", date: "2025-06-16", time: "10:00 AM - 1:00 PM", venue: "Science Block" },
    { id: 3, subject: "English", date: "2025-06-17", time: "10:00 AM - 1:00 PM", venue: "Auditorium" },
    { id: 4, subject: "Social Science", date: "2025-06-18", time: "10:00 AM - 1:00 PM", venue: "Lecture Hall 2" },
    { id: 5, subject: "Hindi", date: "2025-06-19", time: "10:00 AM - 1:00 PM", venue: "Lecture Hall 3" },
    { id: 6, subject: "Computer Science", date: "2025-06-20", time: "10:00 AM - 1:00 PM", venue: "IT Lab" }
  ];

  return (
    <div className="container">
      {/* Header with Back Button */}
      <div className="header pt-25 pb-15">
        <button className="back-button" onClick={() => router.push("/notice")}>
          ← Back
        </button>
        <h1 className="page-title">10th Boards Final Exam Schedule</h1>
      </div>

      {/* Exam Table */}
      <div className="table-container pb-5">
        <table className="exam-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Date</th>
              <th>Time</th>
              <th>Venue</th>
            </tr>
          </thead>
          <tbody>
            {boardExams.map((exam) => (
              <tr key={exam.id}>
                <td>{exam.subject}</td>
                <td>{exam.date}</td>
                <td>{exam.time}</td>
                <td>{exam.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Best Wishes Message */}
      <p className="best-wishes mt-10 pt-10 pb-10">
        Best of luck for your exams!  A bright future awaits you! 
      </p>

      {/* Other Class Exam Schedule Info */}
      <div className="other-schedule pt-30 pb-10">
        <h2>Other Class Exam Schedule</h2>
        <p className="pt-10">The exam schedules for other classes will be communicated by the respective class teachers.</p>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 20px auto;
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
        .table-container {
          border: 1px solid #ddd;
          border-radius: 5px;
          overflow-x: auto;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          background: #fff;
          margin-bottom: 20px;
        }
        .exam-table {
          width: 100%;
          border-collapse: collapse;
        }
        .exam-table th,
        .exam-table td {
          border: 1px solid #ddd;
          padding: 12px;
          text-align: left;
        }
        .exam-table th {
          background-color: #f8f9fa;
          font-weight: bold;
        }
        .best-wishes {
          font-size: 1.2rem;
          font-weight: bold;
          color: #3D6CE7;
          margin-top: 10px;
        }
        .other-schedule {
          text-align: center;
          font-size: 1rem;
          color: #555;
          border-top: 1px solid #ddd;
          padding-top: 20px;
        }
        @media (max-width: 768px) {
          .exam-table th,
          .exam-table td {
            padding: 8px;
            font-size: 0.9rem;
          }
          .page-title {
            font-size: 1.8rem;
          }
          .back-button {
            font-size: 0.9rem;
            padding: 6px 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default ExamSchedule;
