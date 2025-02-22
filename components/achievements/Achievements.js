import React from "react";
import StandardGrid from "../common/StandardGrid";
import achievementsData from "../../data/achievements.json";

const AchievementsArea = () => {
  return (
    <StandardGrid
      gridData={achievementsData}
      pageTitle="Achievements"
      pageDescription="Our students have achieved remarkable success in various fields."
      detailsRoute="achievement-details"
    />
  );
};

export default AchievementsArea;
