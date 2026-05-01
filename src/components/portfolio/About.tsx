import { Check } from "lucide-react";
import { about, education, certifications } from "@/data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="01 — About" title="A bit about me" />
        <div className="grid md:grid-cols-5 gap-10">
          <div className="reveal md:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <ul className="mt-6 grid sm:grid-cols-2 gap-2">
              {about.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal md:col-span-2 space-y-6">
            <div className="rounded-lg border border-border p-5">
              <h3 className="text-sm font-semibold mb-3 tracking-wide uppercase text-muted-foreground">
                Education
              </h3>
              <ul className="space-y-3">
                {education.map((e) => (
                  <li key={e.degree}>
                    <div className="text-sm font-medium">{e.degree}</div>
                    <div className="text-xs text-muted-foreground">
                      {e.school} · {e.duration}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="text-sm font-semibold mb-3 tracking-wide uppercase text-muted-foreground">
                Certifications
              </h3>
              <ul className="space-y-2 text-sm">
                {certifications.map((c) => (
                  <li key={c} className="text-muted-foreground">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}