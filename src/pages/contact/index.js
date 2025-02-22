import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import ContactArea from "../../../components/Contact/ContactArea";
import ContactFooter from "../../../components/Contact/ContactFooter";
import ContactInfoArea from "../../../components/Contact/ContactInfoArea";
import Header from "../../../components/Home/Header";
import SEO from "../../../components/seo";

const Contact = () => {
  return (
    <>
      <SEO pageTitle="Contact" />
      <Header />
      <BreadCrumb title="Contact" subtitle="Contact" />
      <ContactArea />
      <ContactFooter />
    </>
  );
};

export default Contact;
