import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Globe2,
  Building2,
  Rocket,
  ShoppingBag,
  Briefcase,
  RefreshCw,
  Search,
  Wrench,
  Smartphone,
  Zap,
  Check,
  Plus,
  Minus,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  ShieldCheck,
  Gauge,
  Palette,
  Headphones,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ELPIDIO'S DESIGN — Premium Web Agency for Modern Brands" },
      {
        name: "description",
        content:
          "Premium web agency building futuristic, high-performance websites — landing pages, business sites, and e-commerce — engineered for speed, SEO, and conversion.",
      },
      { property: "og:title", content: "ELPIDIO'S DESIGN — Premium Web Agency for Modern Brands" },
      {
        property: "og:description",
        content:
          "Futuristic, high-performance websites engineered for speed, SEO, and conversion.",
      },
      { property: "og:url", content: "https://luminar-arc-studio.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://luminar-arc-studio.lovable.app/" }],
  }),
  component: Home,
});


function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useMouseGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.setProperty("--mx", `${e.clientX}px`);
      ref.current.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return ref;
}

function Home() {
  useReveal();
  const glowRef = useMouseGlow();

  return (
    <div ref={glowRef} className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <MouseGlow />
      <Particles />
      <GradientOrbs />
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


/* ================= Background layers ================= */

function MouseGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background:
          "radial-gradient(600px circle at var(--mx, 50%) var(--my, 30%), rgba(0,229,255,0.10), transparent 60%)",
      }}
    />
  );
}

function GradientOrbs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#00e5ff]/20 blur-[120px] animate-pulse-glow" />
      <div
        className="absolute right-[-10%] top-[20%] h-[600px] w-[600px] rounded-full bg-[#7c3aed]/25 blur-[140px] animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-[-15%] left-[20%] h-[500px] w-[500px] rounded-full bg-[#00ffc8]/15 blur-[130px] animate-pulse-glow"
        style={{ animationDelay: "3s" }}
      />
    </div>
  );
}

function Particles() {
  const [dots, setDots] = useState<Array<{ l: number; d: number; s: number; c: string }>>([]);
  useEffect(() => {
    const colors = ["#00e5ff", "#7c3aed", "#00ffc8", "#ffffff"];
    setDots(
      Array.from({ length: 40 }, () => ({
        l: Math.random() * 100,
        d: Math.random() * 20,
        s: 12 + Math.random() * 20,
        c: colors[Math.floor(Math.random() * colors.length)],
      })),
    );
  }, []);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {dots.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-[-10px] block h-1 w-1 rounded-full"
          style={{
            left: `${p.l}%`,
            background: p.c,
            boxShadow: `0 0 12px ${p.c}`,
            animation: `particle ${p.s}s linear ${p.d}s infinite`,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
}

/* ================= Nav ================= */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["About", "#about"],
    ["Services", "#services"],
    ["Process", "#process"],
    ["Testimonials", "#testimonials"],
    ["FAQ", "#faq"],
    ["Contact", "#contact"],
  ];
  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 ${
          scrolled ? "glass-strong rounded-full px-4 py-2 sm:px-6" : ""
        }`}
      >
        <a href="#top" className="group flex items-center gap-2">
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#00e5ff] via-[#7c3aed] to-[#00ffc8] shadow-[0_0_25px_rgba(0,229,255,0.6)]">
            <span className="text-sm font-bold text-[#050816]">E</span>
          </span>
          <span className="font-display text-sm font-semibold tracking-widest text-white sm:text-base">
            ELPIDIO'S<span className="text-[#00e5ff]">.</span>DESIGN
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([l, h]) => (
            <a
              key={h}
              href={h}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {l}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary hidden text-sm md:inline-flex">
          Start Project <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

/* ================= Hero ================= */

function Hero() {
  return (
    <section id="top" className="relative z-10 pt-40 pb-24 sm:pt-44 sm:pb-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="animate-rise">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-white/80">
            <Sparkles className="h-3.5 w-3.5 text-[#00e5ff]" />
            Premium digital agency
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Transform Your Business Into a{" "}
            <span className="text-gradient animate-gradient">Powerful Digital Brand</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            We create modern, high-performance websites that help businesses attract more
            customers, increase credibility, and grow faster.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Get My Website <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-ghost">
              View Portfolio
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#00ffc8]" /> Secure by design
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="h-4 w-4 text-[#00e5ff]" /> 98+ Lighthouse
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#7c3aed]" /> Award-worthy craft
            </div>
          </div>
        </div>

        <HoloGlobe />
      </div>
    </section>
  );
}

function HoloGlobe() {
  return (
    <div className="relative mx-auto h-[460px] w-full max-w-[520px] sm:h-[560px]">
      {/* rotating rings */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative h-[380px] w-[380px] sm:h-[460px] sm:w-[460px]">
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute inset-0 rounded-full border border-[#00e5ff]/30" />
          </div>
          <div className="absolute inset-6 animate-spin-rev">
            <div
              className="absolute inset-0 rounded-full border border-[#7c3aed]/40"
              style={{ transform: "rotateX(70deg)" }}
            />
          </div>
          <div className="absolute inset-12 animate-spin-slow" style={{ animationDuration: "22s" }}>
            <div
              className="absolute inset-0 rounded-full border border-[#00ffc8]/30"
              style={{ transform: "rotateX(60deg) rotateY(30deg)" }}
            />
          </div>

          {/* core globe */}
          <div className="absolute inset-16 animate-float-slow">
            <div
              className="relative h-full w-full rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(0,229,255,0.9), rgba(124,58,237,0.6) 45%, rgba(5,8,22,0.9) 75%)",
                boxShadow:
                  "0 0 80px rgba(0,229,255,0.5), inset 0 0 60px rgba(124,58,237,0.6)",
              }}
            >
              {/* meridians */}
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 h-full w-full opacity-70"
                fill="none"
              >
                <defs>
                  <linearGradient id="grid" x1="0" x2="1">
                    <stop offset="0" stopColor="#00e5ff" />
                    <stop offset="1" stopColor="#7c3aed" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="98" stroke="url(#grid)" strokeWidth="0.6" />
                {[20, 40, 60, 80].map((r) => (
                  <ellipse
                    key={r}
                    cx="100"
                    cy="100"
                    rx="98"
                    ry={r}
                    stroke="url(#grid)"
                    strokeWidth="0.4"
                  />
                ))}
                {[-60, -30, 0, 30, 60].map((a) => (
                  <ellipse
                    key={a}
                    cx="100"
                    cy="100"
                    rx={98}
                    ry="98"
                    stroke="url(#grid)"
                    strokeWidth="0.4"
                    transform={`rotate(${a} 100 100) scale(${Math.cos((a * Math.PI) / 180) || 0.1} 1)`}
                  />
                ))}
                <g className="animate-dash">
                  <path
                    d="M20 100 Q 100 20 180 100"
                    stroke="#00ffc8"
                    strokeWidth="0.8"
                    fill="none"
                  />
                  <path
                    d="M20 100 Q 100 180 180 100"
                    stroke="#00e5ff"
                    strokeWidth="0.8"
                    fill="none"
                  />
                </g>
              </svg>
              {/* nodes */}
              {[
                { t: "18%", l: "22%" },
                { t: "40%", l: "78%" },
                { t: "68%", l: "30%" },
                { t: "30%", l: "55%" },
                { t: "75%", l: "65%" },
              ].map((p, i) => (
                <span
                  key={i}
                  className="absolute h-2 w-2 rounded-full bg-[#00ffc8] shadow-[0_0_14px_#00ffc8] animate-pulse-glow"
                  style={{ top: p.t, left: p.l, animationDelay: `${i * 0.4}s` }}
                />
              ))}
            </div>
          </div>

          {/* orbiting windows */}
          {[
            { r: 210, delay: "0s", label: "Landing", color: "#00e5ff" },
            { r: 210, delay: "-10s", label: "Shop", color: "#00ffc8" },
            { r: 210, delay: "-20s", label: "Brand", color: "#7c3aed" },
          ].map((o, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={
                {
                  animation: `orbit 24s linear infinite`,
                  animationDelay: o.delay,
                  ["--r" as any]: `${o.r * 0.5}px`,
                } as React.CSSProperties
              }
            >
              <div className="glass-strong flex w-40 flex-col gap-1.5 p-3 shadow-[0_0_30px_rgba(0,229,255,0.25)]">
                <div className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="h-2 w-3/4 rounded bg-white/20" />
                <div className="h-2 w-1/2 rounded bg-white/10" />
                <div className="mt-1 h-8 rounded" style={{ background: `linear-gradient(135deg, ${o.color}55, ${o.color}22)` }} />
                <div className="mt-1 text-[10px] font-medium tracking-widest text-white/70">
                  {o.label.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* floating badges */}
      <div className="absolute right-2 top-6 glass animate-float-mid p-3">
        <div className="flex items-center gap-2">
          <Gauge className="h-4 w-4 text-[#00e5ff]" />
          <div>
            <div className="text-[10px] uppercase tracking-widest text-white/60">Performance</div>
            <div className="text-sm font-semibold">99 / 100</div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-6 left-2 glass animate-float-mid p-3"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-[#00ffc8]" />
          <div>
            <div className="text-[10px] uppercase tracking-widest text-white/60">SSL Secure</div>
            <div className="text-sm font-semibold">Enabled</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= Trust ================= */

function TrustBar() {
  const words = ["Fast", "Secure", "Modern", "SEO Ready", "Responsive", "Conversion Focused"];
  return (
    <section className="relative z-10 border-y border-white/5 bg-white/[0.02] py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 text-xs uppercase tracking-[0.25em] text-white/50 sm:px-6">
        {words.map((w) => (
          <span key={w} className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#00e5ff]" />
            {w}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ================= About ================= */

function About() {
  return (
    <section id="about" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <SectionTag>Who We Are</SectionTag>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
              A modern agency built for <span className="text-gradient">the next decade</span> of
              the web.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              <span className="font-semibold text-white">ELPIDIO'S DESIGN</span> is a modern digital
              agency specialized in creating premium websites for businesses. We combine
              creativity, technology, and innovation to deliver websites that are beautiful, fast,
              secure, and optimized for growth.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { k: "Projects delivered", v: "120+" },
                { k: "Client satisfaction", v: "99%" },
                { k: "Avg. Lighthouse", v: "98" },
                { k: "Countries served", v: "14" },
              ].map((s) => (
                <div key={s.k} className="glass p-5">
                  <div className="text-2xl font-bold text-gradient">{s.v}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{s.k}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal relative">
            <div className="glass-strong relative overflow-hidden p-8">
              <div className="absolute inset-0 opacity-30" style={{ background: "var(--grad-primary)" }} />
              <div className="relative">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/80">
                  <Sparkles className="h-4 w-4" /> Our Craft
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    { icon: Palette, t: "Design", d: "Distinctive brand systems" },
                    { icon: Zap, t: "Engineering", d: "Blazing-fast Next.js builds" },
                    { icon: Search, t: "Growth", d: "SEO & conversion optimized" },
                  ].map((r) => (
                    <div key={r.t} className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 backdrop-blur">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
                        <r.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">{r.t}</div>
                        <div className="text-sm text-white/70">{r.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-white/80">
      <span className="h-1.5 w-1.5 rounded-full bg-[#00ffc8] shadow-[0_0_10px_#00ffc8]" />
      {children}
    </span>
  );
}

/* ================= Services ================= */

const SERVICES = [
  { icon: Building2, t: "Business Websites", d: "Convert visitors into loyal customers." },
  { icon: Briefcase, t: "Corporate Websites", d: "Enterprise-grade presence with authority." },
  { icon: Rocket, t: "Landing Pages", d: "High-conversion pages for campaigns." },
  { icon: ShoppingBag, t: "E-commerce Stores", d: "Stunning shops built to sell 24/7." },
  { icon: Globe2, t: "Portfolio Websites", d: "Showcase your craft in cinematic style." },
  { icon: RefreshCw, t: "Website Redesign", d: "Modernize outdated sites into premium brands." },
  { icon: Search, t: "SEO Optimization", d: "Rank higher, get discovered, grow faster." },
  { icon: Wrench, t: "Website Maintenance", d: "We keep your site fast, secure, updated." },
  { icon: Smartphone, t: "Responsive Design", d: "Pixel-perfect on every device." },
  { icon: Zap, t: "Speed Optimization", d: "Sub-second load times, guaranteed." },
];

function Services() {
  return (
    <section id="services" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center reveal">
          <SectionTag>Services</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
            Everything you need to <span className="text-gradient">win online</span>
          </h2>
          <p className="mt-4 text-white/70">
            From strategy to launch, we build digital experiences engineered for performance and
            growth.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.t} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  t,
  d,
  index,
}: {
  icon: React.ElementType;
  t: string;
  d: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = ((y / r.height) - 0.5) * -10;
    const ry = ((x / r.width) - 0.5) * 12;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    el.style.setProperty("--gx", `${x}px`);
    el.style.setProperty("--gy", `${y}px`);
  };
  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="glass glow-ring reveal group relative overflow-hidden p-6 transition-transform duration-300"
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--gx,50%) var(--gy,50%), rgba(0,229,255,0.18), transparent 60%)",
        }}
      />
      <div className="relative">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#00e5ff]/20 to-[#7c3aed]/20 ring-1 ring-white/10">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="mt-4 font-display text-lg font-semibold">{t}</h3>
        <p className="mt-2 text-sm text-white/60">{d}</p>
        <div className="mt-5 flex items-center gap-1 text-xs font-medium text-[#00e5ff] opacity-0 transition-opacity group-hover:opacity-100">
          Learn more <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </div>
  );
}

/* ================= Why Us ================= */

function WhyUs() {
  const stats = [
    { icon: Smartphone, k: "Responsive", v: 100, suf: "%" },
    { icon: Zap, k: "Fast Loading", v: 99, suf: "/100" },
    { icon: Palette, k: "Modern Design", v: 100, suf: "%" },
    { icon: Search, k: "SEO Optimized", v: 98, suf: "/100" },
    { icon: ShieldCheck, k: "Secure", v: 100, suf: "%" },
    { icon: Headphones, k: "Pro Support", v: 24, suf: "/7" },
  ];
  return (
    <section className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center reveal">
          <SectionTag>Why Choose Us</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
            Built for <span className="text-gradient">performance</span>, designed to convert
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <StatCard key={s.k} {...s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  k,
  v,
  suf,
  delay,
}: {
  icon: React.ElementType;
  k: string;
  v: number;
  suf: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) {
        const start = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.round(v * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [v]);
  return (
    <div
      ref={ref}
      className="glass glow-ring reveal group relative overflow-hidden p-7"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#00e5ff]/25 to-[#00ffc8]/20 ring-1 ring-white/10">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <div className="font-display text-3xl font-bold">
            <span className="text-gradient">{n}</span>
            <span className="text-white/80">{suf}</span>
          </div>
          <div className="text-sm text-white/70">{k}</div>
        </div>
      </div>
    </div>
  );
}

/* ================= Process ================= */

const STEPS = [
  { n: "01", t: "Consultation", d: "We listen, understand your goals, and shape a strategy." },
  { n: "02", t: "Design", d: "Distinctive visuals and UI crafted to convert." },
  { n: "03", t: "Development", d: "Fast, secure, scalable code — engineered for growth." },
  { n: "04", t: "Launch", d: "Deploy, optimize, monitor — and grow with you." },
];

function Process() {
  return (
    <section id="process" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center reveal">
          <SectionTag>Our Process</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
            From idea to <span className="text-gradient">live in 4 steps</span>
          </h2>
        </div>

        <div className="relative mt-16">
          {/* connecting line */}
          <svg
            aria-hidden
            className="absolute left-0 right-0 top-9 hidden lg:block"
            height="4"
            width="100%"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="line" x1="0" x2="1">
                <stop offset="0" stopColor="#00e5ff" />
                <stop offset="0.5" stopColor="#7c3aed" />
                <stop offset="1" stopColor="#00ffc8" />
              </linearGradient>
            </defs>
            <line
              x1="6%"
              y1="2"
              x2="94%"
              y2="2"
              stroke="url(#line)"
              strokeWidth="2"
              strokeDasharray="6 8"
              className="animate-dash"
            />
          </svg>
          <div className="grid gap-8 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div key={s.n} className="reveal relative" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="relative mx-auto grid h-[72px] w-[72px] place-items-center rounded-full bg-[#050816] ring-2 ring-white/10">
                  <div
                    className="absolute inset-0 rounded-full opacity-70 blur-md"
                    style={{ background: "var(--grad-primary)" }}
                  />
                  <span className="relative font-display text-lg font-bold text-gradient">
                    {s.n}
                  </span>
                </div>
                <div className="glass mt-6 p-6 text-center">
                  <div className="font-display text-lg font-semibold">{s.t}</div>
                  <div className="mt-2 text-sm text-white/65">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= Testimonials ================= */

const TESTIMONIALS = [
  {
    n: "Amina Kodjo",
    r: "Founder, Nova Boutique",
    q: "Our new site tripled online orders in the first month. Absolutely stunning work — worth every franc.",
  },
  {
    n: "David Mensah",
    r: "CEO, Vertex Consulting",
    q: "ELPIDIO'S DESIGN delivered a corporate site that finally matches the ambition of our brand. Clients notice.",
  },
  {
    n: "Sarah Boubacar",
    r: "Marketing Lead, Solaris",
    q: "The fastest, cleanest launch we've ever had. The team is talented, responsive and genuinely creative.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center reveal">
          <SectionTag>Testimonials</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
            Trusted by <span className="text-gradient">ambitious founders</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.n}
              className="glass glow-ring reveal group p-7"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1 text-[#00ffc8]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <span key={k} className="text-lg">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="mt-4 text-white/85">"{t.q}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                <div
                  className="grid h-10 w-10 place-items-center rounded-full font-semibold text-[#050816]"
                  style={{ background: "var(--grad-primary)" }}
                >
                  {t.n.split(" ").map((w) => w[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.n}</div>
                  <div className="text-xs text-white/60">{t.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= FAQ ================= */

const FAQS = [
  {
    q: "How long does it take to build a website?",
    a: "Most projects launch within 2–4 weeks depending on scope. Landing pages can go live in as little as 5 days.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. Every project includes 30 days of free support, and we offer monthly maintenance plans to keep your site fast and secure.",
  },
  {
    q: "Will my website be mobile-friendly and SEO ready?",
    a: "Always. Every site we build is fully responsive, accessible, and optimized for search engines from day one.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. We specialize in transforming outdated sites into premium, modern digital experiences.",
  },
  {
    q: "How much does a premium website cost?",
    a: "Investment depends on your goals. Contact us and we'll send a tailored proposal within 24 hours.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center reveal">
          <SectionTag>FAQ</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
            Frequently asked <span className="text-gradient">questions</span>
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="glass reveal overflow-hidden"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-display text-base font-medium sm:text-lg">{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-white/70">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================= Contact ================= */

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <section id="contact" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center reveal">
          <SectionTag>Contact</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
            Let's Build Your <span className="text-gradient">Future Website</span>
          </h2>
          <p className="mt-4 text-white/70">
            Tell us about your project. We reply within 24 hours with a tailored proposal.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {[
              {
                icon: Phone,
                t: "Phone",
                lines: ["+228 92 26 01 38", "+228 96 49 30 51"],
                href: "tel:+22892260138",
              },
              {
                icon: Mail,
                t: "Email",
                lines: ["espoirpowerboy@gmail.com"],
                href: "mailto:espoirpowerboy@gmail.com",
              },
              {
                icon: MapPin,
                t: "Location",
                lines: ["Lomé, Togo — Serving worldwide"],
              },
            ].map((c) => (
              <a
                key={c.t}
                href={c.href || "#"}
                className="glass glow-ring reveal flex items-start gap-4 p-6"
              >
                <div
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl"
                  style={{ background: "var(--grad-primary)", boxShadow: "var(--shadow-glow)" }}
                >
                  <c.icon className="h-5 w-5 text-[#050816]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/60">{c.t}</div>
                  {c.lines.map((l) => (
                    <div key={l} className="mt-0.5 text-base font-medium">
                      {l}
                    </div>
                  ))}
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={onSubmit}
            className="glass-strong reveal relative overflow-hidden p-6 sm:p-8 lg:col-span-3"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-40 blur-3xl"
              style={{ background: "var(--grad-primary)" }}
            />
            <div className="relative grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your full name" />
              <Field label="Company" name="company" placeholder="Company (optional)" />
              <Field label="Phone" name="phone" type="tel" placeholder="+228 …" />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" />
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-widest text-white/60">
                  Project Description
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your business, goals and timeline…"
                  className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-[#00e5ff] focus:ring-2 focus:ring-[#00e5ff]/30"
                />
              </div>
            </div>
            <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
              {sent ? (
                <>
                  <Check className="h-4 w-4" /> Message sent
                </>
              ) : (
                <>
                  Start My Project <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
            <p className="mt-3 text-xs text-white/50">
              By submitting, you agree to be contacted about your project.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-white/60">{label}</label>
      <input
        required={name !== "company"}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-[#00e5ff] focus:ring-2 focus:ring-[#00e5ff]/30"
      />
    </div>
  );
}

/* ================= Footer ================= */

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#00e5ff] via-[#7c3aed] to-[#00ffc8]">
                <span className="text-sm font-bold text-[#050816]">E</span>
              </span>
              <span className="font-display text-base font-semibold tracking-widest">
                ELPIDIO'S<span className="text-[#00e5ff]">.</span>DESIGN
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/60">
              Building the Future of Business Websites.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Facebook, label: "Facebook" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={`Visit ELPIDIO'S DESIGN on ${label}`}
                  className="glass grid h-10 w-10 place-items-center transition-transform hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,229,255,0.5)]"
                >
                  <Icon className="h-4 w-4 text-white" />
                </a>
              ))}

            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-white/60">Navigate</div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {["About", "Services", "Process", "Testimonials", "FAQ", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="transition-colors hover:text-[#00e5ff]"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-white/60">Get in Touch</div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>+228 92 26 01 38</li>
              <li>+228 96 49 30 51</li>
              <li>espoirpowerboy@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <div>© {new Date().getFullYear()} ELPIDIO'S DESIGN. All rights reserved.</div>
          <div>Crafted with precision · Lomé → Worldwide</div>
        </div>
      </div>
    </footer>
  );
}
