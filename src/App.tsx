import { useReveal } from "./hooks/useReveal";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Audience } from "./components/Audience";
import { ProblemSolution } from "./components/ProblemSolution";
import { Examples } from "./components/Examples";
import { Benefits } from "./components/Benefits";
import { Outcomes } from "./components/Outcomes";
import { Modules } from "./components/Modules";
import { Process } from "./components/Process";
import { FinalResult } from "./components/FinalResult";
import { Format } from "./components/Format";
import { Trainers } from "./components/Trainers";
import { ProfessionalGrowth } from "./components/ProfessionalGrowth";
import { Completion } from "./components/Completion";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { MobileCta } from "./components/MobileCta";

export default function App() {
  useReveal();

  return (
    <>
      <a
        href="#sisu"
        className="sr-only z-[60] rounded-full bg-sun-400 px-5 py-3 font-bold text-navy-950 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Liigu põhisisu juurde
      </a>
      <Header />
      <main id="sisu" tabIndex={-1} className="outline-none">
        <Hero />
        <Audience />
        <ProblemSolution />
        <Examples />
        <Benefits />
        <Outcomes />
        <Modules />
        <Process />
        <FinalResult />
        <Format />
        <Trainers />
        <ProfessionalGrowth />
        <Completion />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
