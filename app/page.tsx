import Banner from "./components/Banner/index";
import Companies from "./components/Companies/Companies";
import Mentor from "./components/Mentor/index";
import Testimonials from "./components/Testimonials/index";
import Newsletter from "./components/Newsletter/Newsletter";
import LatestNews from "./components/Blog/index";
import ProgramsHighlight from "./components/Programs";
import ImpactSection from "./components/Impact";
import CTASection from "./components/CTA";
import AboutUsSection from "./components/About";
import FAQSection from "./components/FAQ";
import FounderStory from "./components/FounderStory";
import MissionVision from "./components/About/MissionVision";
import AboutHero from "./components/About/AboutHero";

export default function Home() {
  return (
    <main>
      <Banner />
      <AboutUsSection />
      <ProgramsHighlight />
      <Mentor />
      <Testimonials />
      <LatestNews />
      <CTASection />
    </main>
  );
}
