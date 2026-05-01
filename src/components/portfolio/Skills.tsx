import { skillGroups } from "@/data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="04 — Skills"
          title="Tools I work with"
          description="The everyday stack across AI, data, and backend."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="reveal rounded-xl border border-border bg-background p-5"
            >
              <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-primary">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-full border border-border text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}