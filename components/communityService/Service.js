import React from "react";
import StandardGrid from "../common/StandardGrid";
import communityData from "../../data/communityData.json";

const CommunityServicesArea = () => {
  return (
    <StandardGrid
      gridData={communityData}
      pageTitle="Community Services"
      pageDescription="Our school actively engages in various community service initiatives."
      detailsRoute="community-details"
    />
  );
};

export default CommunityServicesArea;
