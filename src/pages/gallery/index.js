import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import Gallery from "./gallery";
import SEO from "../../../components/seo";

const SignIn = () => {
  return (
    <>
      <SEO pageTitle="Gallery" />
      <Header />
      {/* <BreadCrumb title="Principal Message" subtitle="Principal Message" /> */}
      <Gallery />
      <Footer />
    </>
  );
};

export default SignIn;
