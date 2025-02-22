/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { listOfBooksData } from "../../../data/listOfBooks_data.json";

function ListOfBooks() {
  const [activeItem, setActiveItem] = useState(null);

  const handleToggle = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="container">
      <h1 className="page-title pb-20">List Of Books</h1>
      <section className="accordion">
        {listOfBooksData.map((item) => (
          <div key={item.id} className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => handleToggle(item.id)}
            >
              <button className="accordion-button">
                {item.name} - {item.courses}
              </button>
            </div>
            <div
              className={`accordion-body ${activeItem === item.id ? "show" : ""}`}
            >
              <table className="books-table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Books</th>
                  </tr>
                </thead>
                <tbody>
                  {item.mainSubjects.map((subject, index) => (
                    <tr key={index}>
                      <td className="subject-name">
                        <strong>{subject.subject}</strong>
                      </td>
                      <td className="books-list">
                        {subject.books.join(", ")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px;
          font-family: Arial, sans-serif;
        }
        .page-title {
          text-align: center;
          margin-bottom: 20px;
          font-size: 2rem;
          color: #333;
        }
        .accordion {
          border: 1px solid #ddd;
          border-radius: 5px;
          overflow: hidden;
        }
        .accordion-item {
          border-bottom: 1px solid #ddd;
        }
        .accordion-item:last-child {
          border-bottom: none;
        }
        .accordion-header {
          background-color: #f8f9fa;
          padding: 15px;
          cursor: pointer;
        }
        .accordion-button {
          background: none;
          border: none;
          font-size: 18px;
          font-weight: bold;
          color: #333;
          text-align: left;
          width: 100%;
          padding: 0;
        }
        .accordion-body {
          display: none;
          padding: 15px;
          background-color: #fff;
        }
        .accordion-body.show {
          display: block;
        }
        .books-table {
          width: 100%;
          border-collapse: collapse;
        }
        .books-table th,
        .books-table td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
          font-size: 1rem;
        }
        .books-table th {
          background-color: #f1f1f1;
          font-weight: bold;
        }
        @media (max-width: 768px) {
          .accordion-header {
            padding: 10px;
          }
          .accordion-button {
            font-size: 16px;
          }
          .books-table th,
          .books-table td {
            padding: 6px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}

export default ListOfBooks;
