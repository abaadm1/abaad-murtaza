import { Check, ArrowDown } from "lucide-react";
import { about } from "@/data/portfolio";
import { SectionTitle } from "./SectionTitle";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function About() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();
  
  return (
    <section id="about" className="relative min-h-screen flex items-center py-24 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="01 — About" title="A bit about me" />
        <div 
          ref={contentRef}
          className={`max-w-4xl mx-auto space-y-4 text-muted-foreground leading-relaxed transition-all duration-700 ${
            contentVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {about.paragraphs.map((p, i) => (
            <p 
              key={i}
              className={`transition-all duration-700 delay-${i * 100} ${
                contentVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              {p}
            </p>
          ))}
          <ul className={`mt-6 grid sm:grid-cols-2 gap-2 transition-all duration-700 delay-300 ${
            contentVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}>
            {about.highlights.map((h, index) => (
              <li 
                key={h} 
                className={`flex items-start gap-2 text-sm text-foreground transition-all duration-700 delay-${(index + 4) * 100} ${
                  contentVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-4'
                }`}
              >
                <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        onClick={() => {
          const experienceSection = document.getElementById('experience');
          if (experienceSection) {
            experienceSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        aria-label="Scroll to experience"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  );
}