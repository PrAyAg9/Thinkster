import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import Books from "./books";
import SEO from "../../../components/seo";

const Register = () => {
  return (
    <>
      <SEO pageTitle="List of Books" />
      <Header />
      <Books />
      <Footer />
    </>
  );
};

export default Register;