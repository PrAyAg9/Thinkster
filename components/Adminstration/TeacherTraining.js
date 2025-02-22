import React from "react";
import StandardGrid from "../common/StandardGrid";
import trainingData from "../../data/teachersTrainingData.json";

const TeachersTrainingArea = () => {
  return (
    <StandardGrid
      gridData={trainingData}
      pageTitle="Teacher's Training"
      pageDescription="Enhance your teaching skills with our innovative training programs."
      detailsRoute="teachers-training-details"
    />
  );
};

export default TeachersTrainingArea;
