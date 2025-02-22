import React, { useState } from "react";
import Pagination from "../common/Pagination";
import Link from "next/link";
import Image from "next/image";

const CurricularActivitiesArea = ({ activitiesData = [] }) => {
  // Default static data for curricular activities if no data is passed in.
  // We added a "description" property and a "date" property to each element.
  const defaultActivities = [
    {
      _id: "1",
      img_bg: "assets/img/grid/9.png",
      category: "Sports",
      title: "Inter-School Cricket Tournament",
      teacher_img: "assets/img/course/course-2.jpg",
      tutor_name: "Coach Sharma",
      date: "2023-09-01",
      description: "Join us for an exciting inter-school cricket tournament and cheer for your team!",
    },
    {
      _id: "2",
      img_bg: "assets/img/grid/18.png",
      category: "Arts",
      title: "Annual Art Exhibition 2024",
      teacher_img: "assets/img/course/course-2.jpg",
      tutor_name: "Ms. Kapoor",
      date: "2023-08-25",
      description: "Explore stunning artworks by our talented students in this annual exhibition.",
    },
    {
      _id: "3",
      img_bg: "assets/img/grid/25.png",
      category: "Music",
      title: "School Band Competition",
      teacher_img: "assets/img/course/course-2.jpg",
      tutor_name: "Mr. Reddy",
      date: "2023-08-30",
      description: "Witness a musical showdown among the finest school bands in the region!",
    },
    {
      _id: "4",
      img_bg: "assets/img/grid/20.png",
      category: "Dance",
      title: "Classical Dance Performance",
      teacher_img: "assets/img/course/course-2.jpg",
      tutor_name: "Ms. Verma",
      date: "2023-09-02",
      description: "Experience grace and rhythm as our students perform classical dance routines.",
    },
    {
      _id: "5",
      img_bg: "assets/img/grid/21.png",
      category: "Culture",
      title: "Cultural Fest & Traditions",
      teacher_img: "assets/img/course/course-2.jpg",
      tutor_name: "Mr. Gupta",
      date: "2023-08-20",
      description: "Celebrate the vibrant cultures and traditions that bring our community together.",
    },
    {
      _id: "6",
      img_bg: "assets/img/grid/22.png",
      category: "Theatre",
      title: "School Drama and Theatre",
      teacher_img: "assets/img/course/course-2.jpg",
      tutor_name: "Ms. Das",
      date: "2023-09-03",
      description: "Watch our budding actors take the stage in a variety of theatrical performances.",
    },
    {
      _id: "7",
      img_bg: "assets/img/grid/23.png",
      category: "Technology",
      title: "Robotics and Coding Workshop",
      teacher_img: "teacher_tech.jpg",
      tutor_name: "Mr. Mehta",
      date: "2023-09-04",
      description: "A hands-on workshop introducing robotics and coding concepts for young innovators.",
    },
  ];

  // Use the provided activitiesData if available; otherwise use defaultActivities.
  const data =
    activitiesData && activitiesData.length > 0
      ? activitiesData
      : defaultActivities;

  // Sorting state: default is "A to Z"
  const [sortOption, setSortOption] = useState("A to Z");

  // Available sorting options
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

  // Pagination states.
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const activityItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  // Handle pagination.
  const paginate = (number) => {
    setCurrentPage(number);
  };

  // Handle dropdown sort option change.
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1); // Reset to first page on sort change.
  };

  return (
    <>
      <section className="course__area pt-45 pb-20 grey-bg-3">
        <div className="container">
          <div className="section__title-wrapper text-center mb-50">
              <h2 className="title">Extra Curicullar Activities</h2>
              <p className="pb-20">
                A Bried Overview about extraactivites conducted in our School
              </p>
            </div>
          {/* Top Bar with Tabs & Sorting Dropdown */}
          <div className="course__tab-inner white-bg mb-50">
            <div className="row align-items-center">
              {/* Left side: Tab buttons and view info */}
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
                    <h4>{`Showing 1 - ${activityItems?.length} of ${data?.length} Curricular Activities`}</h4>
                  </div>
                </div>
              </div>
              {/* Right side: Sorting dropdown */}
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

          {/* Curricular Activity Items – Grid and List Views */}
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
                      {activityItems?.map((activity) => {
                        const {
                          _id,
                          img_bg,
                          title,
                          teacher_img,
                          tutor_name,
                          date,
                          description,
                        } = activity;
                        return (
                          <div
                            key={_id}
                            className="col-xxl-4 col-xl-4 col-lg-6 col-md-6"
                          >
                            <div className="course__item white-bg transition-3 mb-30">
                              <div className="course__thumb w-img fix course_thumb_height">
                                <Link href={`#`}>
                                  <a>
                                    <img src={img_bg} alt="" />
                                  </a>
                                </Link>
                              </div>
                              <div className="course__content p-relative">
                                {/* Title */}
                                <h3 className="course__title">
                                  <Link href={`#`}>
                                    <a>{title.substring(0, 30)}..</a>
                                  </Link>
                                </h3>
                                {/* Description */}
                                <p className="course__desc">
                                  {description}
                                </p>
                                {/* Horizontal line */}
                                <hr />
                                {/* Bottom row: tutor on left, date on right */}
                                <div className="d-flex align-items-center justify-content-between">
                                  <div className="course__tutor">
                                    <a href="#">
                                      <img src={teacher_img} alt="" /> {tutor_name}
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
                        {activityItems?.map((activity) => {
                          const {
                            _id,
                            img_bg,
                            title,
                            teacher_img,
                            tutor_name,
                            date,
                            description,
                          } = activity;
                          return (
                            <div
                              key={_id}
                              className="course__item course__item-list white-bg mb-30 fix"
                            >
                              <div className="row gx-0">
                                <div className="col-xxl-4 col-xl-4 col-lg-4">
                                  <div
                                    className="course__thumb w-img p-relative fix"
                                    style={{ height: "100%" }}
                                  >
                                    <Link href={`#`}>
                                      <a>
                                        <img
                                          src={img_bg}
                                          alt=""
                                          style={{ objectFit: "cover" }}
                                        />
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                                <div className="col-xxl-8 col-xl-8 col-lg-8">
                                  <div className="course__right p-relative">
                                    <div className="course__content p-relative">
                                      {/* Title */}
                                      <h3 className="course__title">
                                        <Link href={`#`}>
                                          <a>{title?.substring(0, 30)}..</a>
                                        </Link>
                                      </h3>
                                      {/* Description */}
                                      <p className="course__desc">
                                        {description}
                                      </p>
                                      {/* Horizontal line */}
                                      <hr />
                                      {/* Bottom row: tutor on left, date on right */}
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="course__tutor">
                                          <a href="#">
                                            <img src={teacher_img} alt="" /> {tutor_name}
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
                                        <Link href={`#`}>
                                          <a className="link-btn-2">
                                            View Details
                                            <i className="far fa-arrow-right"></i>
                                            <i className="far fa-arrow-right"></i>
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
              totalCourse={sortedData?.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CurricularActivitiesArea;
