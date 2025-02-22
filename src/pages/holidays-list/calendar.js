/* eslint-disable react/no-unknown-property */
import React from "react";
import { holidaysData } from "../../../data/holidays_data.json";

function HolidaysList() {
  return (
    <div className="container">
      <h1 className="page-title pb-20">Academic Calendar - Holidays List</h1>
      <div className="table-container">
        <table className="holidays-table">
          <thead>
            <tr>
              <th>Date (Day)</th>
              <th>Holiday/Event</th>
              <th>Category</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {holidaysData.map((item, index) => (
              <tr key={index}>
                <td>
                  {item.date} ({item.day})
                </td>
                <td>{item.holiday}</td>
                <td>
                  <span
                    className={`badge ${
                      item.category === "Holiday"
                        ? "bg-danger"
                        : item.category === "Event"
                        ? "bg-primary"
                        : "bg-success"
                    }`}
                  >
                    {item.category}
                  </span>
                </td>
                <td>{item.note ? item.note : "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 50px auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .page-title {
          text-align: center;
          margin-bottom: 20px;
          font-size: 2rem;
          color: #333;
        }
        .table-container {
          border: 1px solid #ddd;
          border-radius: 5px;
          overflow: auto;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          background: #fff;
        }
        .holidays-table {
          width: 100%;
          border-collapse: collapse;
        }
        .holidays-table th,
        .holidays-table td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
          font-size: 1rem;
        }
        .holidays-table th {
          background-color: #f8f9fa;
          font-weight: bold;
        }
        .badge {
          display: inline-block;
          padding: 4px 8px;
          border-radius: 4px;
          color: #fff;
          font-size: 0.9rem;
        }
        .bg-danger {
          background-color: #dc3545;
        }
        .bg-primary {
          background-color: #0d6efd;
        }
        .bg-success {
          background-color: #28a745;
        }
        @media (max-width: 768px) {
          .holidays-table th,
          .holidays-table td {
            padding: 8px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}

export default HolidaysList;
