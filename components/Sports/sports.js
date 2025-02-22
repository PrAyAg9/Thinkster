import React, { useState } from "react";
import Pagination from "../common/Pagination";
import Link from "next/link";
import Image from "next/image";

const SportsArea = ({ sportsData = [] }) => {
  // Default static sports data if none is provided.
  // Each entry represents a school sports update.
  const defaultSports = [
    {
      _id: "1",
      img_bg: "cricket1.jpg",
      category: "Cricket",
      title: "School Cricket Team Standings 2024",
      teacher_img: "coach_cricket.jpg",
      tutor_name: "Coach Rohit Sharma",
    },
    {
      _id: "2",
      img_bg: "football1.jpg",
      category: "Football",
      title: "Inter-School Football Champions 2023",
      teacher_img: "coach_football.jpg",
      tutor_name: "Coach Singh",
    },
    {
      _id: "3",
      img_bg: "chess1.jpg",
      category: "Chess",
      title: "Chess Tournament: State Winners",
      teacher_img: "coach_chess.jpg",
      tutor_name: "Coach Anand",
    },
    {
      _id: "4",
      img_bg: "basketball1.jpg",
      category: "Basketball",
      title: "Basketball League Standings",
      teacher_img: "coach_basketball.jpg",
      tutor_name: "Coach Jordan",
    },
    {
      _id: "5",
      img_bg: "volleyball1.jpg",
      category: "Volleyball",
      title: "Volleyball Tournament Highlights",
      teacher_img: "coach_volleyball.jpg",
      tutor_name: "Coach Kapoor",
    },
    {
      _id: "6",
      img_bg: "cricket2.jpg",
      category: "Cricket",
      title: "Inter-School Cricket Tournament Update",
      teacher_img: "coach_cricket2.jpg",
      tutor_name: "Coach Kohli",
    },
    {
      _id: "7",
      img_bg: "football2.jpg",
      category: "Football",
      title: "Football League Final Results",
      teacher_img: "coach_football2.jpg",
      tutor_name: "Coach Desai",
    },
  ];

  // Use provided data if available; otherwise fall back to defaultSports.
  const data = sportsData && sportsData.length > 0 ? sportsData : defaultSports;

  // Filter state: the default option ("Sports Category") means no filtering.
  const [category, setCategory] = useState("Sports Category");
  const [categoryFilter, setCategoryFilter] = useState(false);

  // Static filter categories for sports.
  const staticCategories = [
    "Cricket",
    "Football",
    "Chess",
    "Basketball",
    "Volleyball",
  ];

  // Filter the data if a specific category is selected.
  const filteredData = categoryFilter
    ? data.filter((item) => item.category === category)
    : data;

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const sportsItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Pagination handler
  const paginate = (number) => {
    setCurrentPage(number);
  };

  // Handle dropdown filter change.
  const handleCategory = (e) => {
    const selected = e.target.value;
    setCategory(selected);
    if (selected === "Sports Category") {
      setCategoryFilter(false);
    } else {
      setCategoryFilter(true);
    }
    setCurrentPage(1); // Reset to first page on filter change.
  };

  return (
    <>
      <section className="course__area pt-45 pb-90 grey-bg-3">
        <div className="container">
          {/* Top Bar with Tabs & Filter Dropdown */}
          <div className="course__tab-inner white-bg mb-50">
            <div className="row align-items-center">
              {/* Left side: Tabs and view header */}
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
                            <rect
                              x="3"
                              y="3"
                              className="st0"
                              width="7"
                              height="7"
                            />
                            <rect
                              x="14"
                              y="3"
                              className="st0"
                              width="7"
                              height="7"
                            />
                            <rect
                              x="14"
                              y="14"
                              className="st0"
                              width="7"
                              height="7"
                            />
                            <rect
                              x="3"
                              y="14"
                              className="st0"
                              width="7"
                              height="7"
                            />
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
                    <h4>{`Showing 1 - ${sportsItems?.length} of ${data?.length} Sports Updates`}</h4>
                  </div>
                </div>
              </div>
              {/* Right side: Filter dropdown */}
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="course__sort d-flex justify-content-sm-end">
                  <div className="course__sort-inner">
                    <select onChange={handleCategory} value={category}>
                      <option>Sports Category</option>
                      {staticCategories.map((cat, index) => (
                        <option key={index} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sports Items – Grid and List Views */}
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
                      {sportsItems?.map((sport) => {
                        const {
                          _id,
                          img_bg,
                          category,
                          title,
                          teacher_img,
                          tutor_name,
                        } = sport;
                        return (
                          <div
                            key={_id}
                            className="col-xxl-4 col-xl-4 col-lg-6 col-md-6"
                          >
                            <div className="course__item white-bg transition-3 mb-30">
                              <div className="course__thumb w-img fix course_thumb_height">
                                <Link href={`/sports-details/${_id}`}>
                                  <a>
                                    <img src={img_bg} alt="" />
                                  </a>
                                </Link>
                              </div>
                              <div className="course__content p-relative">
                                <div className="course__tag">
                                  <Link href={`/sports-details/${_id}`}>
                                    <a>{category}</a>
                                  </Link>
                                </div>
                                <h3 className="course__title">
                                  <Link href={`/sports-details/${_id}`}>
                                    <a>{title.substring(0, 30)}..</a>
                                  </Link>
                                </h3>
                                <p>
                                  Stay updated with our latest sports results,
                                  team standings, and match highlights.
                                </p>
                                <div className="course__bottom d-sm-flex align-items-center justify-content-between">
                                  <div className="course__tutor">
                                    <a href="#">
                                      <img src={teacher_img} alt="" />{" "}
                                      {tutor_name}
                                    </a>
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
                        {sportsItems?.map((sport) => {
                          const {
                            _id,
                            img_bg,
                            category,
                            title,
                            teacher_img,
                            tutor_name,
                          } = sport;
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
                                    <Link href={`/sports-details/${_id}`}>
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
                                      <div className="course__tag">
                                        <Link href={`/sports-details/${_id}`}>
                                          <a>{category}</a>
                                        </Link>
                                      </div>
                                      <h3 className="course__title">
                                        <Link href={`/sports-details/${_id}`}>
                                          <a>{title?.substring(0, 30)}..</a>
                                        </Link>
                                      </h3>
                                      <div className="course__summary">
                                        <p>
                                          Stay updated with our latest sports
                                          results, team standings, and match
                                          highlights.
                                        </p>
                                      </div>
                                      <div className="course__bottom d-sm-flex align-items-center justify-content-between">
                                        <div className="course__tutor">
                                          <a href="#">
                                            <img src={teacher_img} alt="" />{" "}
                                            {tutor_name}
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="course__content-bottom d-flex justify-content-between align-items-center">
                                      <div className="course__btn">
                                        <Link href={`/sports-details/${_id}`}>
                                          <a className="link-btn-2">
                                            View Sports Update
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
            {!categoryFilter && (
              <Pagination
                coursePerPage={itemsPerPage}
                totalCourse={filteredData?.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SportsArea;
