import React from "react";
import { useSelector } from "react-redux";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import SEO from "../../../components/seo";
import TeamDetailsArea from "../../../components/TeamDetails/TeamDetailsArea";
import { useGetTeamsQuery } from "../../../redux/api/apiSlice";

const TeamDetails = () => {
  const {data:teams,isLoading,error,isError} = useGetTeamsQuery();
   // decide to render
   let team_content = null;
   // loader
   if (isLoading && !isError) {
      team_content = <div className="container">
      <h2 className="text-center pt-10 alert alert-info mt-50">Loading...</h2>
    </div>
   }
 
   if(!isLoading && !isError && teams?.length === 0){
      team_content = <h2>No Teams Found</h2>
   }
 
   if(!isLoading && !isError && teams.length > 0){
      team_content = teams[0]
   }


  return (
    <>
      <SEO pageTitle="Team Details" />
      <Header />
      <BreadCrumb title="Team Details" subtitle="Team Details" />
      <TeamDetailsArea singleTeam={team_content} />
      <Footer />
    </>
  );
};

export default TeamDetails;
