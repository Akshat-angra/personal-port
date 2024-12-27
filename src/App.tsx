import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Footer } from "@/components/layout/Footer";
import { useEffect } from "react";
import SkillsSection from "./components/SkillsSection";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section").forEach((section) => {
      section.classList.add("reveal");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <SkillsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}