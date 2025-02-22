import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import Glance from "./form"
import SEO from "../../../components/seo";

const Register = () => {
  return (
    <>
      <SEO pageTitle="Sign Up" />
      <Header />
      <Glance />
      <Footer />
    </>
  );
};

export default Register;