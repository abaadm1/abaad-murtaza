import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Moon, Sun, User, Briefcase, Wrench, FolderKanban, GraduationCap, MessageCircle, Menu, X } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About Me", icon: User },
  { href: "#experience", label: "Work Experience", icon: Briefcase },
  { href: "#skills", label: "Skills", icon: Wrench },
  { href: "#projects", label: "Projects", icon: FolderKanban },
  { href: "#education", label: "Education", icon: GraduationCap },
  { href: "#contact", label: "Contact", icon: MessageCircle },
];

export function Siderail() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 inset-x-0 z-40 h-14 bg-background/90 backdrop-blur border-b border-border flex items-center justify-between px-4">
        <a href="#home" className="font-bold tracking-tight">
          {profile.name.split(" ")[0]}<span className="text-primary">.</span>
        </a>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-border"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-border"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-30 bg-background pt-14 overflow-y-auto">
          <SiderailContent onNavigate={() => setOpen(false)} />
        </div>
      )}

      {/* Desktop fixed siderail */}
      <aside className="hidden md:flex fixed inset-y-0 left-0 z-40 w-72 border-r border-border bg-secondary/40 flex-col">
        <SiderailContent />
        <div className="px-6 py-4 border-t border-border flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Theme</span>
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-border hover:bg-background transition-colors"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </aside>
    </>
  );
}

function SiderailContent({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto">
      <div className="px-6 pt-10 pb-6 text-center">
        <a href="#home" onClick={onNavigate} className="inline-block">
          <img
            src={profileImg}
            alt={`${profile.name} portrait`}
            className="h-28 w-28 rounded-full object-cover mx-auto border border-border shadow-md"
          />
        </a>
        <h2 className="mt-4 text-lg font-bold tracking-tight">{profile.name}</h2>
        <p className="mt-1 text-xs text-muted-foreground leading-relaxed px-2">
          {profile.title}
        </p>
        <div className="mt-4 flex items-center justify-center gap-4 text-muted-foreground">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground transition-colors">
            <Github className="h-4 w-4" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-foreground transition-colors">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>

      <nav className="px-4 pb-6 space-y-1">
        {links.map((l) => {
          const Icon = l.icon;
          return (
            <a
              key={l.href}
              href={l.href}
              onClick={onNavigate}
              className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-background transition-colors"
            >
              <Icon className="h-4 w-4" />
              <span>{l.label}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
