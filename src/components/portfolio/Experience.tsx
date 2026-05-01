import { experiences } from "@/data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="02 — Experience"
          title="Where I've worked"
          description="Roles spanning research, industry, and teaching."
        />
        <ol className="relative border-l border-border ml-3 space-y-10">
          {experiences.map((e) => (
            <li key={`${e.role}-${e.company}`} className="reveal pl-6 relative">
              <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {e.role}{" "}
                  <span className="text-primary font-medium">@ {e.company}</span>
                </h3>
                <span className="text-xs text-muted-foreground">
                  {e.duration}
                  {e.location ? ` · ${e.location}` : ""}
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              {e.tags && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {e.tags.map((t) => (
                    <span
                      key={t}
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
      </div>
    </section>
  );
}