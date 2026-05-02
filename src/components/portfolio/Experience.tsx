"use client";

import { useState } from "react";
import { Briefcase, GraduationCap, ArrowDown } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function Experience() {
  const [filter, setFilter] = useState<"professional" | "teaching">("professional");

  const filteredExperiences = experiences.filter((exp) => exp.category === filter);

  return (
    <section id="experience" className="relative min-h-screen flex items-center py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="02 — Experience"
          title="Where I've worked"
          description="Roles spanning research, industry, and teaching."
        />
        
        {/* Toggle Switch */}
        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setFilter("professional")}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              filter === "professional"
                ? "bg-primary text-primary-foreground"
                : "bg-background border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            <Briefcase className="h-4 w-4" />
            Professional
          </button>
          <button
            onClick={() => setFilter("teaching")}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              filter === "teaching"
                ? "bg-primary text-primary-foreground"
                : "bg-background border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            <GraduationCap className="h-4 w-4" />
            Teaching
          </button>
        </div>

        {/* Experience List */}
        <ol className="relative border-l border-border ml-3 mt-12 space-y-10">
          {filteredExperiences.map((e, index) => (
            <li key={`${filter}-${index}-${e.role}-${e.company}`} className="pl-6 relative">
              <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {e.role}{" "}
                  <span className="text-primary font-medium">
                    @{" "}
                    {e.companyLink ? (
                      <a 
                        href={e.companyLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {e.company}
                      </a>
                    ) : (
                      e.company
                    )}
                  </span>
                </h3>
                <span className="text-xs text-muted-foreground">
                  {e.duration}
                  {e.location ? ` · ${e.location}` : ""}
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                {e.bullets.map((b, i) => (
                  <li key={`${filter}-${index}-bullet-${i}`}>{b}</li>
                ))}
              </ul>
              {e.tags && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {e.tags.map((t) => (
                    <span
                      key={`${filter}-${index}-tag-${t}`}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-background border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
        
        {filteredExperiences.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-sm">No {filter} experience to display.</p>
          </div>
        )}
      </div>

      <button
        onClick={() => {
          const projectsSection = document.getElementById('projects');
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        aria-label="Scroll to projects"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  );
}