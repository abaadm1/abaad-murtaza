import { Users, Heart, ArrowDown, MapPin, Calendar } from "lucide-react";
import { leadershipExperience } from "@/data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function Leadership() {
  return (
    <section id="leadership" className="relative min-h-screen flex items-center py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="06 — Leadership & Community"
          title="Community Impact"
          description="My leadership roles and contributions to community service and social impact."
        />
        <div className="reveal mt-12 space-y-8">
          {leadershipExperience.map((experience, index) => (
            <div
              key={experience.organization}
              className="relative pl-8 pb-8 border-l border-border last:border-l-0"
            >
              <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {experience.role}
                      </h3>
                      {experience.location && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {experience.location}
                        </div>
                      )}
                    </div>
                    <h4 className="text-base font-medium text-foreground mb-2">
                      {experience.organization}
                    </h4>
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="h-4 w-4 text-primary" />
                      <p className="text-sm text-primary font-medium">
                        {experience.duration}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {experience.description}
                    </p>
                    
                    <div className="mt-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Heart className="h-4 w-4 text-primary" />
                        <h5 className="text-sm font-semibold text-foreground">
                          Key Achievements & Impact:
                        </h5>
                      </div>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="text-sm text-muted-foreground leading-relaxed pl-4 relative"
                          >
                            <span className="absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          const projectsSection = document.getElementById('contact');
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        aria-label="Scroll to contact"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  );
}
