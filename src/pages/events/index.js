import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Header from "../../../components/Home/Header";
import Events from "../../../components/events/Events";

import SEO from "../../../components/seo";

const OurEvents = () => {
  return (
    <>
      <SEO pageTitle="Event" />
      <Header />
      <BreadCrumb title="Event" subtitle="Event" />
      <Events />

    </>
  );
};

export default OurEvents;
