/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect, useRef } from "react";
import studentData from "../../data/students.json";

const StudentEnrollPage = () => {
  // For simplicity, we only have students for class "1"
  const classes = ["1"];

  // States for form and lazy loading
  const [selectedClass, setSelectedClass] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [displayedStudents, setDisplayedStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const sentinelRef = useRef(null);

  // Handle form submission: filter students by selected class
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedClass) {
      const filtered = studentData.filter(
        (student) => student.class === selectedClass
      );
      setFilteredData(filtered);
      setDisplayedStudents(filtered.slice(0, pageSize));
      setCurrentPage(1);
      setShowTable(true);
    } else {
      alert("Please select a class.");
    }
  };

  // Load more rows automatically when sentinel comes into view
  const loadMore = () => {
    const nextPage = currentPage + 1;
    const start = currentPage * pageSize;
    const end = start + pageSize;
    setDisplayedStudents((prev) => [
      ...prev,
      ...filteredData.slice(start, end)
    ]);
    setCurrentPage(nextPage);
  };

  useEffect(() => {
    // Only observe if there's more data to load
    if (!sentinelRef.current || displayedStudents.length >= filteredData.length) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );
    observer.observe(sentinelRef.current);

    return () => {
      if (sentinelRef.current) observer.unobserve(sentinelRef.current);
    };
  }, [displayedStudents, filteredData, currentPage]);

  return (
    <div className="enroll-container">
      {/* Enrollment Form */}
      <div className="form-container">
        <h2 className="form-title">Student Enrollment - New Admission</h2>
        <form onSubmit={handleSubmit} className="enroll-form">
          <label htmlFor="classSelect">Select Class:</label>
          <select
            id="classSelect"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="">--Select Class--</option>
            {classes.map((cls, index) => (
              <option key={index} value={cls}>
                {cls}
              </option>
            ))}
          </select>
          <button type="submit" className="submit-button">
            View Enrollments
          </button>
        </form>
      </div>

      {/* Enrollment Table */}
      {showTable && (
        <div className="table-container">
          <table className="enroll-table">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Class</th>
                <th>Admission Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {displayedStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.class}</td>
                  <td>{student.admissionDate}</td>
                  <td>{student.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Sentinel for lazy loading */}
          {displayedStudents.length < filteredData.length && (
            <div ref={sentinelRef} className="sentinel"></div>
          )}
        </div>
      )}

      <style jsx>{`
        .enroll-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .form-container {
          text-align: center;
          margin-bottom: 30px;
        }
        .form-title {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #333;
        }
        .enroll-form {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .enroll-form label {
          font-size: 16px;
        }
        .enroll-form select {
          font-size: 16px;
          padding: 5px 10px;
        }
        .submit-button {
          padding: 5px 15px;
          font-size: 16px;
          background-color: #3d6ce7;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .submit-button:hover {
          background-color: #345bb2;
        }
        .table-container {
          overflow-x: auto;
        }
        .enroll-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 10px;
        }
        .enroll-table th,
        .enroll-table td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
          font-size: 16px;
        }
        .enroll-table th {
          background-color: #f0f0f0;
          font-weight: bold;
        }
        /* Sentinel element */
        .sentinel {
          height: 1px;
        }
        @media (max-width: 768px) {
          .enroll-table th,
          .enroll-table td {
            font-size: 14px;
            padding: 8px;
          }
          .enroll-form label,
          .enroll-form select,
          .submit-button {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default StudentEnrollPage;
