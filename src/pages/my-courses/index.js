import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import MyCoursesArea from "../../../components/MyCourses/MyCoursesArea";
import SEO from "../../../components/seo";

const MyCourses = () => {
  return (
    <>
      <SEO pageTitle="My Courses" />
      <Header />
      <BreadCrumb title="My Courses" subtitle="My Courses" />
      <MyCoursesArea />
      <Footer />
    </>
  );
};

export default MyCourses;
