import React from "react";
import GetInvolvedHero from "../components/Impact/Hero";
import GetInvolvedOptions from "../components/Impact/Options";
import DonateSection from "../components/Impact/Donate";
import VolunteerSection from "../components/Impact/Volunteer";
import PartnerSection from "../components/Impact/Partner";
import BecomeMentor from "../components/Programs/Mentorship/BecomeAMentor";

const GetInvolvedPage = () => {
  return (
    <>
      <GetInvolvedHero />
      <GetInvolvedOptions />
      <DonateSection />
      <VolunteerSection />
      <PartnerSection />
      <BecomeMentor />
    </>
  );
};

export default GetInvolvedPage;
