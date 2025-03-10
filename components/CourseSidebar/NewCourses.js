import Link from "next/link";
import Image from "next/image";

const NewCourses = ({ allCourseItems }) => {
  return (
    <>
      <div className="course__sidebar-widget white-bg">
        <div className="course__sidebar-course">
          <h3 className="course__sidebar-title">New Activities</h3>
          <ul>
            {allCourseItems?.slice(7, 12).map((course, index) => {
              return (
                <li key={index}>
                  <div className="course__sm d-flex align-items-center mb-30">
                    <div className="course__sm-thumb mr-20">
                      <Link href={`/course-details/${course?._id}`}>
                        <a>
                          <img src={course?.image} alt="" />
                        </a>
                      </Link>
                    </div>
                    <div className="course__sm-content">
                      <div className="course__sm-rating">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa-solid fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-solid fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-solid fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-solid fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-solid fa-star"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h5>
                        <Link href={`/course-details/${course?._id}`}>
                          <a>{course?.category}</a>
                        </Link>
                      </h5>
                      {/* Price section removed */}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NewCourses;
