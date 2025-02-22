/* eslint-disable react/no-unknown-property */
"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";



const SchoolRegistrationForm = () => {
  const router = useRouter(); // Hook to navigate back

  const [formData, setFormData] = useState({
    studentFirstName: "",
    studentLastName: "",
    studentDOB: "",
    studentGender: "",
    applyingClass: "",
    studentAddress: "",
    parentName: "",
    parentContact: "",
    parentEmail: "",
    parentAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    alert("Registration submitted successfully!");
  };

  return (
    <section className="registration-form">
      <div className="container">
        {/* Back Button */}
        <button className="back-btn" onClick={() => router.back()}>
          ⬅ Back
        </button>

        <h2 className="form-title">School Registration Form</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Student Details */}
          <fieldset>
            <legend>Student Details</legend>
            <div className="form-group">
              <label htmlFor="studentFirstName">First Name</label>
              <input
                type="text"
                id="studentFirstName"
                name="studentFirstName"
                value={formData.studentFirstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="studentLastName">Last Name</label>
              <input
                type="text"
                id="studentLastName"
                name="studentLastName"
                value={formData.studentLastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="studentDOB">Date of Birth</label>
              <input
                type="date"
                id="studentDOB"
                name="studentDOB"
                value={formData.studentDOB}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="studentGender">Gender</label>
              <select
                id="studentGender"
                name="studentGender"
                value={formData.studentGender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="applyingClass">Applying for Class</label>
              <input
                type="text"
                id="applyingClass"
                name="applyingClass"
                value={formData.applyingClass}
                onChange={handleChange}
                required
              />
            </div>
          </fieldset>

          {/* Parent/Guardian Details */}
          <fieldset>
            <legend>Parent/Guardian Details</legend>
            <div className="form-group">
              <label htmlFor="parentName">Parent/Guardian Name</label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="parentContact">Contact Number</label>
              <input
                type="tel"
                id="parentContact"
                name="parentContact"
                value={formData.parentContact}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="parentEmail">Email Address</label>
              <input
                type="email"
                id="parentEmail"
                name="parentEmail"
                value={formData.parentEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="parentAddress">Residential Address</label>
              <textarea
                id="parentAddress"
                name="parentAddress"
                value={formData.parentAddress}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </fieldset>

          <div className="form-group text-center">
            <button type="submit" className="submit-btn">Submit Registration</button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .registration-form {
          background-color: #f9f9f9;
          padding: 50px 0;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 30px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .back-btn {
          background: #3d6ce7;
          color: #333;
          border: none;
          padding: 10px 20px;
          font-size: 1rem;
          border-radius: 5px;
          cursor: pointer;
          margin-bottom: 20px;
        }
        .back-btn:hover {
          background: #bbb;
        }
        .form-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: #333;
          text-align: center;
          margin-bottom: 30px;
        }
        fieldset {
          border: 1px solid #ddd;
          padding: 20px;
          margin-bottom: 20px;
          border-radius: 5px;
          background-color: #fdfdfd;
        }
        legend {
          font-size: 1.5rem;
          font-weight: 600;
          color: #333;
          padding: 0 10px;
          width: auto;
        }
        .form-group {
          margin-bottom: 20px;
        }
        label {
          display: block;
          margin-bottom: 5px;
          font-weight: 600;
          color: #555;
        }
        input, select, textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        }
        textarea {
          resize: vertical;
        }
        .submit-btn {
          background-color: #007bff;
          color: #fff;
          border: none;
          padding: 15px 30px;
          font-size: 1.2rem;
          border-radius: 4px;
          cursor: pointer;
          width: 100%;
          margin-top: 10px;
        }
        .submit-btn:hover {
          background-color: #0056b3;
        }
      `}</style>
    </section>
  );
};

export default SchoolRegistrationForm;
