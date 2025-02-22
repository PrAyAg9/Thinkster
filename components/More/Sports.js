import React from "react";
import StandardGrid from "../common/StandardGrid";
import sports from "data/sports.json";

const Sports = () => {
  return (
    <StandardGrid
      gridData={sports}
      pageTitle="Sports"
      pageDescription="Explore our diverse range of sports activities that enrich the current generation."
      detailsRoute="sports" // Adjust this route if needed
    />
  );
};

export default Sports;
