import React from "react";
import DigitalLiteracyHero from "@/app/components/Programs/Digital-Literacy/DigitalHero";
import ProgramOverview from "@/app/components/Programs/Digital-Literacy/DigitalOverview";
import CurriculumSection from "@/app/components/Programs/Digital-Literacy/Curriculum";
import TrainingModules from "@/app/components/Programs/Digital-Literacy/Module";
import SuccessStories from "@/app/components/Programs/Digital-Literacy/SuccessStories";
import TrainingEvents from "@/app/components/Programs/Digital-Literacy/TrainingEvents";
import RegisterSection from "@/app/components/Programs/Digital-Literacy/Register";
const DigitalLiteracyPage = () => {
  return (
    <>
      <DigitalLiteracyHero />
      <ProgramOverview />
      <CurriculumSection />
      <TrainingModules />
      <SuccessStories />
      <TrainingEvents />
      <RegisterSection />
    </>
  );
};

export default DigitalLiteracyPage;
