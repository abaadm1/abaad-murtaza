import { GraduationCap, BookOpen, ArrowDown, Award, ExternalLink, Sun } from "lucide-react";
import { education, certifications, summerSchools } from "@/data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function Education() {
  return (
    <section id="education" className="relative min-h-screen flex items-center py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="05 — Education"
          title="Academic Background"
          description="My educational journey and academic achievements."
        />
        <div className="reveal mt-12 space-y-8">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className="relative pl-8 pb-8 border-l border-border last:border-l-0"
            >
              <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {edu.type === 'master' ? 'MASTER\'S DEGREE' : 'BACHELOR\'S DEGREE'}
                      </h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${
                        edu.status === 'Currently enrolled' 
                          ? 'bg-primary/10 text-primary border-primary/20' 
                          : 'bg-muted text-foreground border-border'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <h4 className="text-base font-medium text-foreground mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-muted-foreground font-medium mb-1">
                      {edu.school}
                    </p>
                    <p className="text-sm text-primary font-medium mb-3">
                      {edu.duration}
                    </p>
                    
                    {edu.courses && edu.courses.length > 0 && (
                      <div className="mt-4">
                        <div className="flex items-center gap-2 mb-3">
                          <BookOpen className="h-4 w-4 text-primary" />
                          <h5 className="text-sm font-semibold text-foreground">
                            Main Courses:
                          </h5>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.courses.map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="text-xs px-2.5 py-1 rounded-full border border-border text-foreground"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summer Schools Section */}
        <div className="reveal mt-16">
          <div className="flex items-center gap-2 mb-6">
            <Sun className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">
              Summer Schools & Academic Training
            </h3>
          </div>
          <div className="space-y-6">
            {summerSchools.map((school, index) => (
              <div
                key={index}
                className="relative pl-8 pb-6 border-l border-border/50 last:border-l-0"
              >
                <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Sun className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {school.title}
                      </h4>
                      <p className="text-sm text-muted-foreground font-medium mb-1">
                        {school.institution}
                      </p>
                      <p className="text-sm text-primary font-medium mb-3">
                        {school.duration}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {school.description}
                      </p>
                      
                      <div className="mt-4">
                        <div className="flex items-center gap-2 mb-3">
                          <BookOpen className="h-4 w-4 text-primary" />
                          <h5 className="text-sm font-semibold text-foreground">
                            Key Topics:
                          </h5>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {school.topics.map((topic, topicIndex) => (
                            <span
                              key={topicIndex}
                              className="text-xs px-2.5 py-1 rounded-full border border-border text-foreground"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div className="reveal mt-16">
          <div className="flex items-center gap-2 mb-6">
            <Award className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">
              Professional Certifications
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="relative group bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-foreground leading-tight mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        {cert.issuer}
                      </p>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                      >
                        <span>View Certificate</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
