import React from "react";
import StandardGrid from "../common/StandardGrid";
import cbseResultsData from "../../data/cbseResultsData.json";

const CBSEResultsArea = () => {
  return (
    <StandardGrid
      gridData={cbseResultsData}
      pageTitle="CBSE Results"
      pageDescription="Discover the latest CBSE exam results and performance highlights."
      detailsRoute="cbse-results-details"
    />
  );
};

export default CBSEResultsArea;
