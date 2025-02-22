import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Header from "../../../components/Home/Header";
import CoursesStyleTwo from "../../../components/coursesStyleTwo/coursesStyleTwoArea";
import Footer from "../../../components/common/Footer";
import SEO from "../../../components/seo";

const CoursesTwoStyle = () => {
  return (
    <>
      <SEO pageTitle="Course Style Two" />
      <Header />
      <BreadCrumb title="Our Courses" subtitle="Courses" />
      <CoursesStyleTwo />
      <Footer white_bg="white-bg" />
    </>
  );
};

export default CoursesTwoStyle;
