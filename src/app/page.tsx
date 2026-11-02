import { BuildProcess } from "@/components/BuildProcess";
import { Capabilities } from "@/components/Capabilities";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Founder } from "@/components/Founder";
import { FounderProblem } from "@/components/FounderProblem";
import { Hero } from "@/components/Hero";
import { WhyNova } from "@/components/WhyNova";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main id="content">
      <Hero />
      <FounderProblem />
      <Capabilities />
      <Work />
      <BuildProcess />
      <Founder />
      <WhyNova />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
