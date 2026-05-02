import { createFileRoute } from "@tanstack/react-router";
import { Siderail } from "@/components/portfolio/Siderail";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Leadership } from "@/components/portfolio/Leadership";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ChatbotWidget } from "@/components/ChatbotWidget";
import { useReveal } from "@/hooks/use-reveal";
import "../styles/globals.css";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <ScrollProgress />
      <Siderail />
      <div className="md:pl-72">
        <main className="pt-14 md:pt-0">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Leadership />
          <Contact />
        </main>
        <Footer />
      </div>
      <ChatbotWidget />
    </div>
  );
}
