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
  head: () => ({
    meta: [
      { title: "Abaad Murtaza — Portfolio" },
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
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
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
