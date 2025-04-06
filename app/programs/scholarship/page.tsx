import React from "react";
import ScholarhipProgramOverview from "@/app/components/Programs/Scholarship/ScholarshipOverview";
import ScholarshipHero from "@/app/components/Programs/Scholarship/ScholarshipHero";
import EligibilitySection from "@/app/components/Programs/Scholarship/ScholarshipEligibility";
import ApplicationProcess from "@/app/components/Programs/Scholarship/ScholarshipApply";
import ScholarshipTypes from "@/app/components/Programs/Scholarship/ScholarshipTypes";
import ScholarshipSuccess from "@/app/components/Programs/Scholarship/ScholarshipSuccess";
import ScholarshipFAQ from "@/app/components/Programs/Scholarship/ScholarshipFAQ";
import ApplySection from "@/app/components/Programs/Scholarship/ScholarshipApply";

const ScholarshipPage = () => {
  return (
    <>
      <ScholarshipHero />
      <ScholarhipProgramOverview />
      <EligibilitySection />
      <ApplicationProcess />
      <ScholarshipTypes />
      <ScholarshipSuccess />
      {/* <ScholarshipFAQ /> */}
    </>
  );
};

export default ScholarshipPage;
