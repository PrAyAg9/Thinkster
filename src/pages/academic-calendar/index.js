import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import SEO from "../../../components/seo";
import QuickLinks from "../../../components/common/QuickLink";
import AcademicCalendar from "./academic-calendar";

const SignIn = () => {
  return (
    <>
      <SEO pageTitle="Principal Message" />
      <Header />
      {/* <BreadCrumb title="Principal Message" subtitle="Principal Message" /> */}
      
      <AcademicCalendar />    
      <Footer />
    </>
  );
};

export default SignIn;
