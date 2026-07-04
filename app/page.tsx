import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import AnimatedBackground from "./components/AnimatedBackground";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Skills />
        <Experience />

        <Contact />
      </main>
      <Footer />
    </>
  );
}
