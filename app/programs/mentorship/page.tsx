import React from "react";
import MentorSpotlight from "@/app/components/Programs/Mentorship/MentorshipSpotlight";
import MentorshipHero from "@/app/components/Programs/Mentorship/MentorshipHero";
import MentorshipBenefits from "@/app/components/Programs/Mentorship/MentorshipBenefits";
import ProgramOverview from "@/app/components/Programs/Mentorship/MentorshipOverview";
import MentorshipTestimonials from "@/app/components/Programs/Mentorship/MentorshipStory";
import BecomeMentor from "@/app/components/Programs/Mentorship/BecomeAMentor";
import MentorshipApproach from "@/app/components/Programs/Mentorship/MentorshipApproach";

const MentorshipPage = () => {
  return (
    <>
      <MentorshipHero />
      <ProgramOverview />
      <MentorshipApproach />
      <MentorSpotlight />
      <MentorshipBenefits />
      <MentorshipTestimonials />
      <BecomeMentor />
    </>
  );
};

export default MentorshipPage;
