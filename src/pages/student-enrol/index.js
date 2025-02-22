import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import StudentEnrol from "../../../components/CourseDetails/StudentEnroll";
import SEO from "../../../components/seo";

const SignIn = () => {
  return (
    <>
      <SEO pageTitle="Principal Message" />
      <Header />
      {/* <BreadCrumb title="Principal Message" subtitle="Principal Message" /> */}
      
      <StudentEnrol />
      <Footer />
    </>
  );
};

export default SignIn;
