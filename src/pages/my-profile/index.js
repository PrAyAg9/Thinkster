import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
// import ProfileArea from "../../../components/MyProfile/ProfileArea";
// import ProfileMenuArea from "../../../components/MyProfile/ProfileMenuArea";
import SEO from "../../../components/seo";

const MyProfile = () => {
  return (
    <>
      <SEO pageTitle="My Profile" />
      <Header />
      <BreadCrumb title="My Profile" subtitle="My Profile" />
      {/* <ProfileArea /> */}
      {/* <ProfileMenuArea /> */}
      <Footer white_bg="white-bg" />
    </>
  );
};

export default MyProfile;
