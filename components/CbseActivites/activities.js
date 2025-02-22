import React from "react";
import StandardGrid from "../common/StandardGrid";
import cbseData from "../../data/cbseActivitiesData.json";

const CBSEActivitiesArea = () => {
  return (
    <StandardGrid
      gridData={cbseData}
      pageTitle="CBSE Activities"
      pageDescription="Stay updated with the latest CBSE announcements, guidelines, and exam schedules."
      detailsRoute="cbse-details"
    />
  );
};

export default CBSEActivitiesArea;