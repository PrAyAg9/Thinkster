// pages/about-us/index.js
import React from "react";
import AboutUsArea from "../../../components/AboutUs/AboutUsArea";
import Header from '../../../components/Home/Header';
// import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import SEO from "../../../components/seo";

const AboutUs = () => {
  return (
    <>
      <SEO pageTitle="About Us" />
      <Header />
      {/* <BreadCrumb title="About us" subtitle="About Us" /> */}
      <AboutUsArea />
      <Footer />
    </>
  );
};

export default AboutUs;
