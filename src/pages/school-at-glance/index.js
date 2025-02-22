import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import Glance from "./schholGlance"
import Infrastructure from "../../../components/CourseDetails/InfrastructurePage";
import SEO from "../../../components/seo";

const Register = () => {
  return (
    <>
      <SEO pagetitle=" School At Glance" />
      <Header />
      <Infrastructure title="School At Glance" />
      <Footer />
    </>
  );
};

export default Register;