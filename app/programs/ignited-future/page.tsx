import React from "react";

import ProgramHero from "@/app/components/Programs/Ignited-Future/IgnitedHero";
import ProgramOverview from "@/app/components/Programs/Ignited-Future/IgnitedOverview";
import HowItWorks from "@/app/components/Programs/Ignited-Future/IgnitedHowItWorks";
import TestimonialsSection from "@/app/components/Testimonials";
import JoinProgram from "@/app/components/Programs/Ignited-Future/IgnitedFutureJoin";

const IgnitedFuturePage = () => {
  return (
    <>
      <ProgramHero />
      <ProgramOverview />
      <HowItWorks />
      <TestimonialsSection />
      <JoinProgram />
    </>
  );
};

export default IgnitedFuturePage;
