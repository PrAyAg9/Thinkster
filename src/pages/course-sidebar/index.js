import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import CourseSidebarArea from "../../../components/CourseSidebar/CourseSidebarArea";
import Header from "../../../components/Home/Header";
import SEO from "../../../components/seo";

const CoursesSidebar = () => {
  return (
    <>
      <SEO pageTitle="Course Sidebar" />
      <Header />
      <BreadCrumb title="Our Courses" subtitle="Courses" />
      <CourseSidebarArea />
      <Footer white_bg="white-bg" />
    </>
  );
};

export default CoursesSidebar;
