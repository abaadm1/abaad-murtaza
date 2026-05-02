import { skillGroups } from "@/data/portfolio";
import { SectionTitle } from "./SectionTitle";
import { Brain, Eye, FileText, BarChart3, Globe, Settings, Code, Bot, Rocket, ArrowDown } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="relative min-h-screen flex items-center py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="04 — Skills"
          title="Tools I work with"
          description="The everyday stack across AI, data, and backend."
        />
        <div className="space-y-6">
          {/* First Row */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* AI & ML Card */}
            <div className="reveal rounded-xl border border-border bg-background overflow-hidden">
              <div className="h-32 bg-secondary/50 flex items-center justify-center">
                <div className="text-center">
                  <Brain className="h-8 w-8 text-primary mb-2 mx-auto" />
                  <h3 className="text-lg font-semibold text-foreground">AI & ML</h3>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5">
                  {skillGroups.find(g => g.title === "AI / ML")?.items.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full border border-border text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Computer Vision Card */}
            <div className="reveal rounded-xl border border-border bg-background overflow-hidden">
              <div className="h-32 bg-secondary/50 flex items-center justify-center">
                <div className="text-center">
                  <Eye className="h-8 w-8 text-primary mb-2 mx-auto" />
                  <h3 className="text-lg font-semibold text-foreground">Computer Vision</h3>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5">
                  {skillGroups.find(g => g.title === "Computer Vision")?.items.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full border border-border text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* NLP & OCR Card */}
            <div className="reveal rounded-xl border border-border bg-background overflow-hidden">
              <div className="h-32 bg-secondary/50 flex items-center justify-center">
                <div className="text-center">
                  <FileText className="h-8 w-8 text-primary mb-2 mx-auto" />
                  <h3 className="text-lg font-semibold text-foreground">NLP & OCR</h3>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5">
                  {skillGroups.find(g => g.title === "NLP & OCR")?.items.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full border border-border text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Data & Analytics Card */}
            <div className="reveal rounded-xl border border-border bg-background overflow-hidden">
              <div className="h-32 bg-secondary/50 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-8 w-8 text-primary mb-2 mx-auto" />
                  <h3 className="text-lg font-semibold text-foreground">Data & Analytics</h3>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5">
                  {skillGroups.find(g => g.title === "Data & Analytics")?.items.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full border border-border text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Backend & Web Card */}
            <div className="reveal rounded-xl border border-border bg-background overflow-hidden">
              <div className="h-32 bg-secondary/50 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="h-8 w-8 text-primary mb-2 mx-auto" />
                  <h3 className="text-lg font-semibold text-foreground">Backend & Web</h3>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5">
                  {skillGroups.find(g => g.title === "Backend & Web")?.items.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full border border-border text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* DevOps & Infra Card */}
            <div className="reveal rounded-xl border border-border bg-background overflow-hidden">
              <div className="h-32 bg-secondary/50 flex items-center justify-center">
                <div className="text-center">
                  <Settings className="h-8 w-8 text-primary mb-2 mx-auto" />
                  <h3 className="text-lg font-semibold text-foreground">DevOps & Infra</h3>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5">
                  {skillGroups.find(g => g.title === "DevOps & Infra")?.items.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full border border-border text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Third Row */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Languages Card */}
            <div className="reveal rounded-xl border border-border bg-background overflow-hidden">
              <div className="h-32 bg-secondary/50 flex items-center justify-center">
                <div className="text-center">
                  <Code className="h-8 w-8 text-primary mb-2 mx-auto" />
                  <h3 className="text-lg font-semibold text-foreground">Languages</h3>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5">
                  {skillGroups.find(g => g.title === "Languages")?.items.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full border border-border text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* LLM Tooling Card */}
            <div className="reveal rounded-xl border border-border bg-background overflow-hidden">
              <div className="h-32 bg-secondary/50 flex items-center justify-center">
                <div className="text-center">
                  <Bot className="h-8 w-8 text-primary mb-2 mx-auto" />
                  <h3 className="text-lg font-semibold text-foreground">LLM Tooling</h3>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5">
                  {skillGroups.find(g => g.title === "LLM Tooling")?.items.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full border border-border text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Always Learning Card */}
            <div className="reveal rounded-xl border border-dashed border-border bg-background/50 overflow-hidden">
              <div className="h-32 bg-secondary/30 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Rocket className="h-8 w-8 text-muted-foreground mb-2 mx-auto" />
                  <h3 className="text-lg font-semibold text-muted-foreground">Always Learning</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground text-center">
                  Continuously expanding my skill set with new technologies and frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          const educationSection = document.getElementById('education');
          if (educationSection) {
            educationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        aria-label="Scroll to education"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  );
}