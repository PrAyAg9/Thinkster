/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import StaffCard from "../../../components/common/StaffCard";
import staffData from "../../../data/staff_data.json";

function Staff() {
  // State for search query and current page
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Filter staff based on search term (case-insensitive)
  const filteredStaff = staffData.staffMembers.filter((staff) =>
    staff.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredStaff.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStaff = filteredStaff.slice(startIndex, startIndex + itemsPerPage);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // reset to first page when search changes
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <section className="instructor-area pt-20 pb-70">
        <div className="container">
          <div className="section__title text-center mb-40">
            <h2 className="title">School Staff</h2>
            <p className="pb-10">
              Our dedicated team of professionals crafting the student&apos;s future.
            </p>
            <div className="pb-20 search-container">
              <input
                type="text"
                placeholder="Search teacher..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            {currentStaff.map((staff) => (
              <div key={staff.id} className="col-xl-3 col-lg-4 col-sm-6">
                {/* Pass link="#" so StaffCard's link never navigates */}
                <StaffCard staff={staff} link="#" />
              </div>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="pagination">
              <button onClick={prevPage} disabled={currentPage === 1}>
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={page === currentPage ? "active" : ""}
                >
                  {page}
                </button>
              ))}
              <button onClick={nextPage} disabled={currentPage === totalPages}>
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .section__title {
          text-align: center;
        }
        .section__title .title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #333;
        }
        .section__title p {
          font-size: 1rem;
          max-width: 600px;
          margin: 0 auto;
          color: #555;
        }
        .search-container {
          margin-top: 20px;
        }
        .search-container input {
          padding: 8px 12px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          width: 100%;
          max-width: 300px;
          margin: 0 auto;
          display: block;
        }
        .pagination {
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }
        .pagination button {
          padding: 8px 12px;
          margin: 0 5px;
          border: none;
          background: #3d6ce7;
          color: #fff;
          border-radius: 4px;
          cursor: pointer;
        }
        .pagination button:disabled {
          background: #ccc;
          cursor: default;
        }
        .pagination button.active {
          background: #192a88;
        }
      `}</style>
    </>
  );
}

export default Staff;
