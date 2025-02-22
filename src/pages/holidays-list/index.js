import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import Holiday from "./calendar";
import SEO from "../../../components/seo";

const Register = () => {
  return (
    <>
      <SEO pageTitle="Holidays List" />
      <Header />
      <Holiday />
      <Footer />
    </>
  );
};

export default Register;