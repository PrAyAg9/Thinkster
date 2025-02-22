import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import LoginArea from "../../../components/Login/LoginArea";
import SEO from "../../../components/seo";

const SignIn = () => {
  return (
    <>
      <SEO pageTitle="Sign In" />
      <Header />
      <BreadCrumb title="Login" subtitle="Login" />
      <LoginArea />
      <Footer />
    </>
  );
};

export default SignIn;
