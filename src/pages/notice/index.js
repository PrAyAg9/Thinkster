import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import Notice from "../../../components/More/Notice";
import SEO from "../../../components/seo";

const SignIn = () => {
  return (
    <>
      <SEO pageTitle="Principal Message" />
      <Header />
      {/* <BreadCrumb title="Principal Message" subtitle="Principal Message" /> */}
      
      <Notice />
      <Footer />
    </>
  );
};

export default SignIn;
