import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import AskMeDialog from "@/components/AskMeDialog";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="mx-auto max-w-5xl px-5 sm:px-8">
        <Hero />
        <Summary />
        <Skills />
        <Experience />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <AskMeDialog />
    </>
  );
}
