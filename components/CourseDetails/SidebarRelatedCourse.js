import { useSelector } from "react-redux";
import Link from "next/link";
import { useGetCoursesQuery } from "../../redux/api/apiSlice";
import Image from "next/image";

const SidebarRelatedCourse = () => {
  const { data: courses, isLoading, error, isError } = useGetCoursesQuery();

  // decide to render
  let content = null;
  // loader
  if (isLoading && !isError) {
    content = (
      <div className="container">
        <h2 className="text-center pt-10 alert alert-info mt-50">Loading...</h2>
      </div>
    );
  }

  if (!isLoading && !isError && courses?.length === 0) {
    content = <h2>No Courses Found</h2>;
  }

  if (!isLoading && !isError && courses?.length > 0) {
    content = courses.slice(7, 10).map((course, index) => {
      return (
        <li key={index}>
          <div className="course__sm d-flex align-items-center mb-30">
            <div className="course__sm-thumb mr-20">
              <a href="#">
                <img src={course?.image} alt="" />
              </a>
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
              <div className="course__sm-price">
                <span>${course?.price}</span>
              </div>
            </div>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <div className="course__sidebar-widget-2 white-bg mb-20">
        <div className="course__sidebar-course">
          <h3 className="course__sidebar-title">Related courses</h3>
          <ul>{content}</ul>
        </div>
      </div>
    </>
  );
};

export default SidebarRelatedCourse;
