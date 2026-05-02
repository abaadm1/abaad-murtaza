import { Github, ExternalLink, ArrowDown } from "lucide-react";
import { useState, useMemo } from "react";
import { projects } from "@/data/portfolio";
import { SectionTitle } from "./SectionTitle";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Projects() {
  const [selectedDomain, setSelectedDomain] = useState<string>("all");
  const [showAllProjects, setShowAllProjects] = useState<boolean>(false);
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollReveal<HTMLDivElement>();

  const domains = useMemo(() => [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "computer-vision", label: "Computer Vision", count: projects.filter(p => p.domain === "computer-vision").length },
    { id: "nlp", label: "NLP", count: projects.filter(p => p.domain === "nlp").length },
    { id: "security", label: "Security", count: projects.filter(p => p.domain === "security").length },
    { id: "research", label: "Research", count: projects.filter(p => p.domain === "research").length },
  ], []);

  const filteredProjects = useMemo(() => {
    if (selectedDomain === "all") {
      return showAllProjects ? projects : projects.slice(0, 6);
    }
    return projects.filter(p => p.domain === selectedDomain);
  }, [selectedDomain, showAllProjects]);

  const handleDomainChange = (domainId: string) => {
    setSelectedDomain(domainId);
    if (domainId !== "all") {
      setShowAllProjects(false);
    }
  };

  return (
    <section id="projects" className="relative min-h-screen flex items-center py-24 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="03 — Projects"
          title="Selected work"
          description="A mix of research, production, and side projects."
        />
        
        {/* Domain Filter Toggle */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {domains.map((domain) => (
            <button
              key={domain.id}
              onClick={() => handleDomainChange(domain.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedDomain === domain.id
                  ? "bg-primary text-primary-foreground ring-2 ring-primary/20"
                  : "bg-muted text-muted-foreground hover:bg-secondary hover:ring-1 hover:ring-border"
              }`}
            >
              {domain.label} ({domain.count})
            </button>
          ))}
        </div>
        
        <div 
          ref={projectsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            projectsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {filteredProjects.map((p, index) => (
            <article
              key={p.title}
              className={`group rounded-xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 ${
                projectsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-end mb-4">
                <div className="flex gap-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub repo"
                      className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live demo"
                      className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full border border-border text-foreground bg-background/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Show More/Less Button */}
        {selectedDomain === "all" && projects.length > 6 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors"
            >
              {showAllProjects ? "Show Less" : `Show More (${projects.length - 6} more)`}
            </button>
          </div>
        )}
      </div>

      <button
        onClick={() => {
          const skillsSection = document.getElementById('skills');
          if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        aria-label="Scroll to skills"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  );
}