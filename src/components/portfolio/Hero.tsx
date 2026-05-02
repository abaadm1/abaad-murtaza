import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { useEffect, useRef, useState } from "react";

// Client-only component wrapper
const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return isClient ? <>{children}</> : null;
};

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = profile.name + '.';
  const vantaRef = useRef<HTMLDivElement | null>(null);

  const parseOklch = (raw: string) => {
    const s = raw.trim();
    const m = s.match(/oklch\(\s*([0-9.]+)\s+([0-9.]+)\s+([0-9.]+)\s*\)/i);
    if (m) return { L: Number(m[1]), C: Number(m[2]), h: Number(m[3]) };
    const parts = s.split(/\s+/).map(Number).filter((n) => Number.isFinite(n));
    if (parts.length >= 3) return { L: parts[0], C: parts[1], h: parts[2] };
    return null;
  };

  const clamp01 = (x: number) => Math.min(1, Math.max(0, x));

  const oklchToRgbInt = (L: number, C: number, hDeg: number) => {
    const h = (hDeg * Math.PI) / 180;
    const a = C * Math.cos(h);
    const b = C * Math.sin(h);

    // OKLab -> LMS (nonlinear)
    const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
    const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
    const s_ = L - 0.0894841775 * a - 1.2914855480 * b;

    const l = l_ * l_ * l_;
    const m = m_ * m_ * m_;
    const s = s_ * s_ * s_;

    // LMS -> linear sRGB
    let r = +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
    let g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
    let bl = -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s;

    // linear -> sRGB
    const toSrgb = (u: number) =>
      u <= 0.0031308 ? 12.92 * u : 1.055 * Math.pow(u, 1 / 2.4) - 0.055;

    r = clamp01(toSrgb(r));
    g = clamp01(toSrgb(g));
    bl = clamp01(toSrgb(bl));

    const R = Math.round(r * 255);
    const G = Math.round(g * 255);
    const B = Math.round(bl * 255);
    return (R << 16) | (G << 8) | B;
  };

  const mixRgbInt = (a: number, b: number, t: number) => {
    const clamp = (x: number) => Math.min(1, Math.max(0, x));
    const tt = clamp(t);
    const ar = (a >> 16) & 255;
    const ag = (a >> 8) & 255;
    const ab = a & 255;
    const br = (b >> 16) & 255;
    const bg = (b >> 8) & 255;
    const bb = b & 255;
    const r = Math.round(ar + (br - ar) * tt);
    const g = Math.round(ag + (bg - ag) * tt);
    const bl = Math.round(ab + (bb - ab) * tt);
    return (r << 16) | (g << 8) | bl;
  };

  useEffect(() => {
    if (isTyping && displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (displayText.length === fullText.length) {
      setIsTyping(false);
    }
  }, [displayText, isTyping, fullText]);

  useEffect(() => {
    // Delay Vanta initialization to prevent hydration issues
    const timer = setTimeout(() => {
      if (typeof window === "undefined") return;
      
      let vantaEffect: any = null;
      let cancelled = false;

      const el = vantaRef.current;
      if (!el) return;

      const reduced =
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
      if (reduced) return;

      (async () => {
        try {
          const THREE = await import("three");
          const vanta = await import("vanta");
          const NET = (vanta as any).NET;
          if (cancelled) return;

          const root = getComputedStyle(document.documentElement);
          const backgroundRaw = root.getPropertyValue("--background");
          const mutedFgRaw = root.getPropertyValue("--muted-foreground");
          const borderRaw = root.getPropertyValue("--border");
          const background = parseOklch(backgroundRaw);
          const mutedFg = parseOklch(mutedFgRaw);
          const border = parseOklch(borderRaw);

          // Gray-toned net so "edges" are visible, but still theme-derived.
          // Use muted-foreground for main lines, and a slightly lighter border tone as secondary.
          const netColor = mutedFg
            ? oklchToRgbInt(mutedFg.L, mutedFg.C, mutedFg.h)
            : 0x6b7280; // slate-500
          const netColor2 = border
            ? oklchToRgbInt(border.L, border.C, border.h)
            : 0xd1d5db; // gray-300
          const bgColor = background
            ? oklchToRgbInt(background.L, background.C, background.h)
            : 0xffffff;

          // Desired look:
          // - nodes: light grey
          // - edges: slightly darker grey
          // Blend toward background so it stays minimal on a light theme.
          // Use a stronger blend for edges so they don't wash out to white.
          const edgeColor = mixRgbInt(bgColor, netColor, 0.88);
          const nodeColor = mixRgbInt(bgColor, netColor2, 0.68);

          vantaEffect = NET({
            el,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            // NET: `color` tends to control the dots; lines may require `lineColor(s)`.
            color: nodeColor, // nodes/dots (light grey)
            color2: nodeColor,
            lineColor: edgeColor, // edges/lines (slightly darker grey)
            lineColors: edgeColor, // some versions use this key
            backgroundColor: bgColor,
            points: 10.0,
            maxDistance: 26.0,
            spacing: 18.0,
            showDots: false,
          });
        } catch {
          // keep fallback background if Vanta fails
        }
      })();

      return () => {
        cancelled = true;
        if (vantaEffect) vantaEffect.destroy();
      };
    }, 1000); // Delay by 1 second to ensure hydration is complete

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative z-0 min-h-screen flex items-center pt-16 md:pt-24 pb-16 bg-background overflow-x-hidden"
    >
      {/* Vanta NET background + minimal fallback wash */}
      <ClientOnly>
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div ref={vantaRef} className="absolute inset-0" />

          {/* fallback wash (also helps keep it light) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.99_0.01_180),transparent_62%)] opacity-70" />
        </div>
      </ClientOnly>
      
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          /* nothing animated; fallback wash stays */
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto w-full px-6 lg:px-8">
        <div className="reveal text-center space-y-6">
          <p className="text-sm text-primary font-medium tracking-wide mb-4">
            Hi, I'm
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            {displayText}
            {isTyping && <span className="animate-pulse">|</span>}
          </h1>
          <h2 className="mt-3 text-2xl md:text-3xl text-muted-foreground font-medium">
            {profile.title}
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mx-auto">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium hover:bg-secondary transition"
            >
              Contact Me
            </a>
            <a
              href="/cv.pdf"
              download="Abaad_Murtaza_CV_2026.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium hover:bg-secondary transition"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-muted-foreground justify-center mx-auto max-w-xs">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  );
}
