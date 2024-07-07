import { ResponsiveAppBar } from "./LandinPage/AppBar";
import { FrequentlyAskedQuestionSection } from "./LandinPage/FrequentlyAskedQuestion";
import { GetStartedPage } from "./LandinPage/GetStartedPage";
import { HeroSection } from "./LandinPage/HeroSection";
import { HowSection } from "./LandinPage/HowSection";
import { OurPoposalSection } from "./LandinPage/OurProposalSection";
import { ServicesSection } from "./LandinPage/ServiceSection";
import { ValuePropositionSection } from "./LandinPage/ValueProposition";

export default function Home() {
  return (
    <main>
      <ResponsiveAppBar />
      <HeroSection />
      <ServicesSection />
      <OurPoposalSection />
      <HowSection />
      <ValuePropositionSection />
      <FrequentlyAskedQuestionSection />
      <GetStartedPage />
    </main>
  );
}
