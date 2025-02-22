import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import TcSample from "./tc-sample"
import SEO from "../../../components/seo";

const Register = () => {
  return (
    <>
      <SEO pageTitle="Sign Up" />
      <Header />
      <TcSample />
      <Footer />
    </>
  );
};

export default Register;
