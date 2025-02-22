import React, { useState } from "react";
import Pagination from "../common/Pagination";
import Link from "next/link";
import Image from "next/image";

const OlympiadsArea = ({ olympiadData = [] }) => {
  // Default static data if no olympiadData is provided.
  // Here, the Academic category has four items and the Extracurricular category has two items.
  const defaultOlympiads = [
    {
      _id: "1",
      img_bg: "math.jpg",
      category: "Academic",
      title: "National Math Olympiad Champion",
      teacher_img: "teacher_math.jpg",
      tutor_name: "Mr. Smith",
    },
    {
      _id: "2",
      img_bg: "physics.jpg",
      category: "Academic",
      title: "State Physics Olympiad Winner",
      teacher_img: "teacher_physics.jpg",
      tutor_name: "Dr. Allen",
    },
    {
      _id: "3",
      img_bg: "science.jpg",
      category: "Academic",
      title: "Regional Science Olympiad Medalist",
      teacher_img: "teacher_science.jpg",
      tutor_name: "Ms. Parker",
    },
    {
      _id: "4",
      img_bg: "writing.jpg",
      category: "Academic",
      title: "Excellence in Writing Olympiad",
      teacher_img: "teacher_writing.jpg",
      tutor_name: "Mrs. Johnson",
    },
    {
      _id: "5",
      img_bg: "spelling.jpg",
      category: "Extracurricular",
      title: "Inter-School Spelling Bee Champion",
      teacher_img: "teacher_spelling.jpg",
      tutor_name: "Ms. Davis",
    },
    {
      _id: "6",
      img_bg: "speaking.jpg",
      category: "Extracurricular",
      title: "National Public Speaking Winner",
      teacher_img: "teacher_speaking.jpg",
      tutor_name: "Mr. Brown",
    },
  ];

  // Use passed-in data if available; otherwise fall back to default data.
  const data =
    olympiadData && olympiadData.length > 0 ? olympiadData : defaultOlympiads;

  // Default filter: "Olympiad Category" means no filtering.
  const [category, setCategory] = useState("Olympiad Category");
  const [categoryFilter, setCategoryFilter] = useState(false);

  // Static filter categories (two options)
  const staticCategories = ["Academic", "Extracurricular"];

  // Filter the data if a specific category is selected.
  const filteredData = categoryFilter
    ? data.filter((item) => item.category === category)
    : data;

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let olympiadItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Pagination function
  const paginate = (number) => {
    setCurrentPage(number);
  };

  // Handle dropdown category change.
  const handleCategory = (e) => {
    const selected = e.target.value;
    setCategory(selected);
    if (selected === "Olympiad Category") {
      setCategoryFilter(false);
    } else {
      setCategoryFilter(true);
    }
    setCurrentPage(1); // Reset to first page on filter change.
  };

  return (
    <>
      {/* 
          The class "pt-115" below adds 115px of top padding. 
          Adjust or remove it if you wish to change the top margin.
      */}
      <section className="course__area pt-115 pb-90 grey-bg-3">
        <div className="container">
          {/* Top Bar with Tabs & Sorting */}
          <div className="course__tab-inner white-bg mb-50">
            <div className="row align-items-center">
              {/* Left side: Tab buttons & view header */}
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
                    <h4>{`Showing 1 - ${olympiadItems?.length} of ${data?.length} Olympiad Achievements`}</h4>
                  </div>
                </div>
              </div>
              {/* Right side: Filter dropdown */}
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="course__sort d-flex justify-content-sm-end">
                  <div className="course__sort-inner">
                    <select onChange={handleCategory} value={category}>
                      <option>Olympiad Category</option>
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

          {/* Olympiad Items – Grid and List Views */}
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
                      {olympiadItems?.map((olympiad) => {
                        const {
                          _id,
                          img_bg,
                          category,
                          title,
                          teacher_img,
                          tutor_name,
                        } = olympiad;
                        return (
                          <div
                            key={_id}
                            className="col-xxl-4 col-xl-4 col-lg-6 col-md-6"
                          >
                            <div className="course__item white-bg transition-3 mb-30">
                              <div className="course__thumb w-img fix course_thumb_height">
                                <Link href={`/olympiad-details/${_id}`}>
                                  <a>
                                    <img src={img_bg} alt="" />
                                  </a>
                                </Link>
                              </div>
                              <div className="course__content p-relative">
                                <div className="course__tag">
                                  <Link href={`/olympiad-details/${_id}`}>
                                    <a>{category}</a>
                                  </Link>
                                </div>
                                <h3 className="course__title">
                                  <Link href={`/olympiad-details/${_id}`}>
                                    <a>{title.substring(0, 30)}..</a>
                                  </Link>
                                </h3>
                                <p>
                                  Our school hosts a wide range of Olympiad
                                  events covering spelling, maths, physics,
                                  science, speaking, and writing competitions.
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
                        {olympiadItems?.map((olympiad) => {
                          const {
                            _id,
                            img_bg,
                            category,
                            title,
                            teacher_img,
                            tutor_name,
                          } = olympiad;
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
                                    <Link href={`/olympiad-details/${_id}`}>
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
                                        <Link href={`/olympiad-details/${_id}`}>
                                          <a>{category}</a>
                                        </Link>
                                      </div>
                                      <h3 className="course__title">
                                        <Link href={`/olympiad-details/${_id}`}>
                                          <a>{title?.substring(0, 30)}..</a>
                                        </Link>
                                      </h3>
                                      <div className="course__summary">
                                        <p>
                                          Our school hosts a wide range of
                                          Olympiad events covering spelling,
                                          maths, physics, science, speaking, and
                                          writing competitions.
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
                                        <Link href={`/olympiad-details/${_id}`}>
                                          <a className="link-btn-2">
                                            View Olympiad
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

export default OlympiadsArea;
