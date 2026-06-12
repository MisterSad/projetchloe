import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Statement from "@/components/Statement";
import Projects from "@/components/Projects";
import Atouts from "@/components/Atouts";
import Parcours from "@/components/Parcours";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Statement />
        <Projects />
        <Atouts />
        <Parcours />
      </main>
      <Footer />
    </>
  );
}
