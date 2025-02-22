import React from "react";
import StandardGrid from "../common/StandardGrid";
import schoolActivitiesData from "data/school-activities.json";

const SchoolActivities = () => {
  return (
    <StandardGrid
      gridData={schoolActivitiesData}
      pageTitle="School Activities"
      pageDescription="Explore our diverse range of school activities that enrich the learning experience."
      detailsRoute="school-activities" // Adjust this route if needed
    />
  );
};

export default SchoolActivities;
