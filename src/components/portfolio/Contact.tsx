import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-24 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto text-center w-full">
        <SectionTitle
          eyebrow="07 — Contact"
          title="Let's work together"
          description="Open to AI/ML engineering, data science, applied research, and LLM/NLP roles. Always happy to chat."
        />
        <div className="reveal mt-4 flex flex-col items-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="text-2xl md:text-3xl font-semibold text-primary hover:underline underline-offset-4"
          >
            {profile.email}
          </a>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}