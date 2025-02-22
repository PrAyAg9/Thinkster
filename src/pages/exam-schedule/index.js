

import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import QuickLinks from "../../../components/common/QuickLink";
import SEO from "../../../components/seo";
import ExamSchedule from "./exam-schedule";

const SignIn = () => {
  return (
    <>
      <SEO pageTitle="Principal Message" />
      <Header />
      {/* <BreadCrumb title="Principal Message" subtitle="Principal Message" /> */}
      

      <ExamSchedule />


      <Footer />
    </>
  );
};

export default SignIn;
