import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import SignUp from "../../../components/Register/SignUp";
import SEO from "../../../components/seo";

const Register = () => {
  return (
    <>
      <SEO pageTitle="Sign Up" />
      <Header />
      <BreadCrumb title="Register" subtitle="Register" />
      <SignUp></SignUp>
      <Footer />
    </>
  );
};

export default Register;
