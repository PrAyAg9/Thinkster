import { useSelector } from "react-redux";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import CourseArea from "../../../components/Courses/CourseArea";
import Header from "../../../components/Home/Header";
import SEO from "../../../components/seo";
import { useGetCoursesQuery } from "../../../redux/api/apiSlice";

const Courses = () => {

  // coursesItems
  const { data: courses, isLoading, error, isError } = useGetCoursesQuery();

  // decide to render
  let content = null;
  // loader
  if (isLoading && !isError) {
    content = <div className="container">
      <h2 className="text-center pt-10 alert alert-info mt-50">Loading...</h2>
    </div>
  }

  if (!isLoading && !isError && courses?.length === 0) {
    content = <h2>No Courses Found</h2>
  }

  if (!isLoading && !isError && courses?.length > 0) {
    content = <CourseArea courseData={courses} />
  }
  return (
    <>
      <SEO pageTitle="Courses" />
      <Header />
      <BreadCrumb title="Our Courses" subtitle="Courses" />
      {content}
      <Footer white_bg="white-bg" />
    </>
  );
};

export default Courses;
