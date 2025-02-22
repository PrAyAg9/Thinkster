import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

// Dynamically import Pagination to avoid potential build issues
const Pagination = dynamic(() => import("./Pagination"), { ssr: false });

const StandardGrid = ({
  gridData = [],
  pageTitle = "Page Title",
  pageDescription = "",
  detailsRoute = "details",
}) => {
  // Use provided data.
  const data = gridData;

  // Sorting state and options.
  const [sortOption, setSortOption] = useState("A to Z");
  const sortOptions = [
    "A to Z",
    "Z to A",
    "Date (Newest First)",
    "Date (Oldest First)",
  ];

  // Sort data based on the selected sort option.
  const sortedData = [...data].sort((a, b) => {
    if (sortOption === "A to Z") {
      return a.title.localeCompare(b.title);
    } else if (sortOption === "Z to A") {
      return b.title.localeCompare(a.title);
    } else if (sortOption === "Date (Newest First)") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortOption === "Date (Oldest First)") {
      return new Date(a.date) - new Date(b.date);
    }
    return 0;
  });

  // Pagination state.
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1); // Reset page on sort change.
  };

  return (
    <section className="course__area pt-45 pb-20 grey-bg-3">
      <div className="container">
        {/* Page Heading */}
        <div className="section__title-wrapper text-center mb-50">
          <h2 className="title">{pageTitle}</h2>
          <p className="pb-20">{pageDescription}</p>
        </div>

        {/* Top Bar: Tabs & Sorting Dropdown */}
        <div className="course__tab-inner white-bg mb-50">
          <div className="row align-items-center">
            {/* Left Side: Tabs & View Info */}
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="course__tab-wrapper d-flex align-items-center">
                <div className="course__tab-btn">
                  <ul className="nav nav-tabs" id="courseTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="grid-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#grid"
                        type="button"
                        role="tab"
                        aria-controls="grid"
                        aria-selected="true"
                      >
                        <svg className="grid" viewBox="0 0 24 24">
                          <rect x="3" y="3" className="st0" width="7" height="7" />
                          <rect x="14" y="3" className="st0" width="7" height="7" />
                          <rect x="14" y="14" className="st0" width="7" height="7" />
                          <rect x="3" y="14" className="st0" width="7" height="7" />
                        </svg>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link list"
                        id="list-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#list"
                        type="button"
                        role="tab"
                        aria-controls="list"
                        aria-selected="false"
                      >
                        <svg className="list" viewBox="0 0 512 512">
                          <g id="Layer_2_1_">
                            <path
                              className="st0"
                              d="M448,69H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,69,448,69z"
                            />
                            <circle className="st0" cx="64" cy="100" r="31" />
                            <path
                              className="st0"
                              d="M448,225H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,225,448,225z"
                            />
                            <circle className="st0" cx="64" cy="256" r="31" />
                            <path
                              className="st0"
                              d="M448,381H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,381,448,381z"
                            />
                            <circle className="st0" cx="64" cy="412" r="31" />
                          </g>
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="course__view">
                  <h4>{`Showing 1 - ${currentItems.length} of ${data.length} Items`}</h4>
                </div>
              </div>
            </div>
            {/* Right Side: Sorting Dropdown */}
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="course__sort d-flex justify-content-sm-end">
                <div className="course__sort-inner">
                  <select onChange={handleSortChange} value={sortOption}>
                    {sortOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid & List Views */}
        <div className="row">
          <div className="col-xxl-12">
            <div className="course__tab-conent">
              <div className="tab-content" id="courseTabContent">
                {/* Grid View */}
                <div
                  className="tab-pane fade show active"
                  id="grid"
                  role="tabpanel"
                  aria-labelledby="grid-tab"
                >
                  <div className="row">
                    {currentItems.map((item) => {
                      const {
                        _id,
                        img_bg,
                        title,
                        teacher_img,
                        tutor_name,
                        date,
                        description,
                      } = item;
                      return (
                        <div key={_id} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                          <div className="course__item white-bg transition-3 mb-30">
                            <div
                              className="course__thumb w-img fix course_thumb_height"
                              style={{
                                position: "relative",
                                width: "100%",
                                height: "250px",
                              }}
                            >
                              <Link href={`#`} passHref>
                                <a>
                                  <Image
                                    src={img_bg}
                                    alt={title}
                                    layout="fill"
                                    objectFit="cover"
                                  />
                                </a>
                              </Link>
                            </div>
                            <div className="course__content p-relative">
                              <h3 className="course__title">
                                <Link href={`#`} passHref>
                                  <a>{title.substring(0, 30)}...</a>
                                </Link>
                              </h3>
                              <p className="course__desc">{description}</p>
                              <hr />
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="course__tutor">
                            
                                    <a className="d-flex align-items-center">
                                      <Image
                                        src={teacher_img}
                                        alt={tutor_name}
                                        width={40}
                                        height={40}
                                        objectFit="cover"
                                        className="rounded-circle"
                                      />
                                      <span className="ms-2">{tutor_name}</span>
                                    </a>
                            
                                </div>
                                <div className="course__date d-flex align-items-center">
                                  <i className="fa-regular fa-calendar me-2"></i>
                                  <span>{date}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* List View */}
                <div
                  className="tab-pane fade"
                  id="list"
                  role="tabpanel"
                  aria-labelledby="list-tab"
                >
                  <div className="row">
                    <div className="col-xxl-12">
                      {currentItems.map((item) => {
                        const {
                          _id,
                          img_bg,
                          title,
                          teacher_img,
                          tutor_name,
                          date,
                          description,
                        } = item;
                        return (
                          <div
                            key={_id}
                            className="course__item course__item-list white-bg mb-30 fix"
                          >
                            <div className="row gx-0">
                              <div className="col-xxl-4 col-xl-4 col-lg-4">
                                <div
                                  className="course__thumb w-img p-relative fix"
                                  style={{
                                    position: "relative",
                                    width: "100%",
                                    height: "250px",
                                  }}
                                >
                                  <Link href={`#`} passHref>
                                    <a>
                                      <Image
                                        src={img_bg}
                                        alt={title}
                                        layout="fill"
                                        objectFit="cover"
                                      />
                                    </a>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-xxl-8 col-xl-8 col-lg-8">
                                <div className="course__right p-relative">
                                  <div className="course__content p-relative">
                                    <h3 className="course__title">
                                      <Link href={`#`} passHref>
                                        <a>{title.substring(0, 30)}...</a>
                                      </Link>
                                    </h3>
                                    <p className="course__desc">{description}</p>
                                    <hr />
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="course__tutor">
                     
                                          <a className="d-flex align-items-center">
                                            <Image
                                              src={teacher_img}
                                              alt={tutor_name}
                                              width={40}
                                              height={40}
                                              objectFit="cover"
                                              className="rounded-circle"
                                            />
                                            <span className="ms-2">{tutor_name}</span>
                                          </a>
                              
                                      </div>
                                      <div className="course__date d-flex align-items-center">
                                        <i className="fa-regular fa-calendar me-2"></i>
                                        <span>{date}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="course__content-bottom d-flex justify-content-between align-items-center">
                                    <div className="course__btn">
                                      <Link href={`#`} passHref>
                                        <a className="link-btn-2">
                                          <span>
                                            View Details
                                            <i className="far fa-arrow-right"></i>
                                            <i className="far fa-arrow-right"></i>
                                          </span>
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="row">
          <Pagination
            coursePerPage={itemsPerPage}
            totalCourse={sortedData.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default StandardGrid;