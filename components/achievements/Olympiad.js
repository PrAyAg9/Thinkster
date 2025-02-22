import React from "react";
import StandardGrid from "../common/StandardGrid";
import achievementsData from "../../data/olympiad.json";

const Olympiad = () => {
  return (
    <StandardGrid
      gridData={achievementsData}
      pageTitle="Olympiad"
      pageDescription="Our students have achieved remarkable success in various Olympiads."
      detailsRoute="olympiad-details"
    />
  );
};

export default Olympiad;
