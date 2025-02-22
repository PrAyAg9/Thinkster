import React from "react";
import { useSelector } from "react-redux";
import Header from "../../../components/Home/Header";
import SEO from "../../../components/seo";

const EventDetails = () => {
  return (
    <>
      <SEO pageTitle="Event Details" />
      <Header />
    </>
  );
};

export default EventDetails;
