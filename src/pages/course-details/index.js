import React, { useEffect } from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import CourseDetailsArea from "../../../components/CourseDetails/CourseDetailsArea";
import Header from "../../../components/Home/Header";
import SEO from "../../../components/seo";
import { useGetCourseQuery } from "../../../redux/api/apiSlice";

const CourseDetails = () => {
  const {data:course,isLoading,isError} = useGetCourseQuery('622037c6ea7975d304b6b4ef')
   // decide to render
   let content = null;
   // loader
   if (isLoading && !isError) {
      content = <div className="container">
      <h2 className="text-center pt-10 alert alert-info mt-50">Loading...</h2>
    </div>
   }

   if(!isLoading && !isError ){
      content =  <CourseDetailsArea courseData={course} />
   }


  return (
    <>
      <SEO pageTitle="Course Details" />
      <Header />
      <BreadCrumb title="Our Courses" subtitle="Courses" />
      {content}
      <Footer />
    </>
  );
};

export default CourseDetails;
