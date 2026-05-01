import { createFileRoute } from "@tanstack/react-router";
import { Siderail } from "@/components/portfolio/Siderail";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Abaad Murtaza — Data Scientist & AI/ML Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Abaad Murtaza — Data Scientist and AI/ML Engineer building LLM, RAG, and computer vision systems. Based in Germany.",
      },
      { property: "og:title", content: "Abaad Murtaza — Data Scientist & AI/ML Engineer" },
      {
        property: "og:description",
        content:
          "AI Research Assistant at DFKI. M.Sc. Data Science & AI at Saarland University. LLMs, RAG, computer vision and backend engineering.",
      },
    ],
  }),
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
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
