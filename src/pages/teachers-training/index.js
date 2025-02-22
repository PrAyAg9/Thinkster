import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import Teacher from "../../../components/Adminstration/TeacherTraining"
import SEO from "../../../components/seo";

const Register = () => {
  return (
    <>
      <SEO pageTitle="Sign Up" />
      <Header />
      <Teacher />
      <Footer />
    </>
  );
};

export default Register;
