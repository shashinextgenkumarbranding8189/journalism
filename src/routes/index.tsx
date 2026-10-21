import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, ArrowLeft, Play, PlayCircle, FileText, MapPin, Users, Mic, Trophy,
  Award, Star, Newspaper, Search, Menu, X, Facebook, Instagram, Youtube, Linkedin,
  Twitter, Mail, Phone, PenTool, Quote,
} from "lucide-react";
import portrait from "@/assets/portrait.png";
import farmer from "@/assets/farmer.jpg";
import village from "@/assets/village.jpg";
import school from "@/assets/school.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your Name — Journalist | Shramjeevi Patrakar Sangh Haryana" },
      { name: "description", content: "Ground reporting, real stories and people's voices from across Haryana." },
      { property: "og:title", content: "Your Name — Journalist from Haryana" },
      { property: "og:description", content: "People. Stories. A Stronger Haryana. Independent ground reporting." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------- Editable placeholder data ---------- */
const NAME = "Your Name";
const ROLE = "Journalist | Shramjeevi Patrakar Sangh Haryana";
const NAV = ["Home", "About", "Reports", "Media", "Gallery", "Awards", "Contact"];
const STATS = [
  { icon: FileText, value: "500+", label: "Reports" },
  { icon: MapPin, value: "100+", label: "Locations" },
  { icon: Users, value: "5+", label: "Years" },
  { icon: Mic, value: "1000+", label: "People Interviewed" },
  { icon: Trophy, value: "People First", label: "Always" },
];
const SIDE_STORIES = [
  { img: school, cat: "Education", title: "Are Government Schools Really Changing?", date: "08 Oct 2025" },
  { img: village, cat: "Women & Society", title: "Women Leading Change in Rural Haryana", date: "02 Oct 2025" },
  { img: farmer, cat: "Governance", title: "Public Services on the Ground", date: "28 Sep 2025" },
];
const REPORTS = [
  { img: farmer, cat: "Agriculture", title: "The Price of a Harvest: MSP and the Small Farmer", date: "20 Sep 2025" },
  { img: school, cat: "Education", title: "Classrooms Without Teachers in Mewat", date: "14 Sep 2025" },
  { img: village, cat: "Women & Society", title: "Self-Help Groups Rewriting Village Economies", date: "05 Sep 2025" },
  { img: farmer, cat: "Governance", title: "Inside a Panchayat Budget Meeting", date: "29 Aug 2025" },
];
const VIDEOS = [
  { img: farmer, title: "Farmers Speak: Challenges and Hopes", time: "12:34" },
  { img: school, title: "Education on the Ground", time: "08:21" },
  { img: village, title: "Youth and Opportunities in Haryana", time: "10:15" },
];
const OUTLETS = ["Publication One", "Daily Chronicle", "The Herald", "News Network", "Haryana Times", "Morning Post"];
const AWARDS = [
  { icon: Trophy, title: "Journalism", sub: "Recognition" },
  { icon: Newspaper, title: "Featured in", sub: "Leading Media" },
  { icon: Star, title: "Active Member", sub: "Shramjeevi Patrakar Sangh Haryana" },
  { icon: Users, title: "Community", sub: "Impact Work" },
];
const GALLERY = [farmer, school, village, farmer, school, village];
const TIMELINE = [
  { year: "2025", text: "Senior field correspondent, statewide ground reports" },
  { year: "2022", text: "Joined Shramjeevi Patrakar Sangh Haryana" },
  { year: "2020", text: "Began independent reporting on rural issues" },
];
const INTERESTS = ["Agriculture", "Education", "Women's Rights", "Governance", "Rural Development", "Youth"];
const SOCIALS = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "X" },
  { icon: Instagram, label: "Instagram" },
  { icon: Youtube, label: "YouTube" },
  { icon: Linkedin, label: "LinkedIn" },
];

/* ---------- Reusable bits ---------- */
const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-7xl px-5 md:px-8 ${className}`}>{children}</div>
);

const CircleBtn = ({ label, children, onClick }: { label: string; children: React.ReactNode; onClick?: () => void }) => (
  <button
    aria-label={label}
    onClick={onClick}
    className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
  >
    {children}
  </button>
);

const Socials = () => (
  <div className="flex gap-2">
    {SOCIALS.map(({ icon: I, label }) => (
      <a key={label} href="#" aria-label={label} className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground">
        <I className="h-4 w-4" />
      </a>
    ))}
  </div>
);

function Index() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("Home");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <Container className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:flex lg:justify-between">
          <a href="#home" className="min-w-0">
            <div className="truncate font-serif text-2xl font-bold uppercase">{NAME}</div>
            <div className="truncate text-xs text-muted-foreground">{ROLE}</div>
          </a>
          <nav className="hidden gap-7 lg:flex" aria-label="Main">
            {NAV.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setActive(n)}
                className={`border-b-2 py-1 text-sm transition-colors hover:text-primary ${active === n ? "border-primary text-primary" : "border-transparent"}`}>
                {n}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button aria-label="Search" className="hidden sm:block hover:text-primary"><Search className="h-5 w-5" /></button>
            <a href="#contact" className="btn-primary hidden sm:inline-flex">Work With Me <ArrowRight className="h-4 w-4" /></a>
            <button aria-label="Menu" className="lg:hidden" onClick={() => setMenu(!menu)}>
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </Container>
        {menu && (
          <nav className="border-t border-border lg:hidden">
            <Container className="flex flex-col py-3">
              {NAV.map((n) => (
                <a key={n} href={`#${n.toLowerCase()}`} onClick={() => { setActive(n); setMenu(false); }} className="py-2 text-sm hover:text-primary">{n}</a>
              ))}
            </Container>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
        <Container className="relative grid items-center gap-8 pt-10 sm:pt-14 lg:grid-cols-[1fr_1.1fr] lg:gap-6 lg:pt-12">
          <div className="text-center lg:text-left">
            <span className="eyebrow anim-fade-up">Independent Journalist · Haryana</span>
            <h1 className="mt-5 text-[2.75rem] font-extrabold leading-[0.95] sm:text-6xl xl:text-[5.5rem]">
              <span className="anim-fade-up block" style={{ animationDelay: "80ms" }}>People.</span>
              <span className="anim-fade-up block" style={{ animationDelay: "180ms" }}>Stories.</span>
              <span className="anim-fade-up block text-primary" style={{ animationDelay: "280ms" }}>
                A <span className="ink-underline">Stronger</span> Haryana.
              </span>
            </h1>
            <p className="anim-fade-up mx-auto mt-6 max-w-md text-base text-muted-foreground sm:text-lg lg:mx-0" style={{ animationDelay: "400ms" }}>
              Ground reporting, real stories and people's voices from across Haryana. Journalism to inform, empower and bring positive change.
            </p>
            <div className="anim-fade-up mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start" style={{ animationDelay: "520ms" }}>
              <a href="#reports" className="btn-primary">Explore My Work <ArrowRight className="h-4 w-4" /></a>
              <a href="#media" onClick={() => setPlaying(true)} className="btn-outline"><PlayCircle className="h-4 w-4" /> Watch Reel</a>
            </div>
            <div className="anim-fade-up mt-10 hidden items-center gap-4 border-t border-border pt-6 text-xs text-muted-foreground lg:flex" style={{ animationDelay: "640ms" }}>
              <span className="relative flex h-2.5 w-2.5"><span className="anim-ping absolute inset-0 rounded-full bg-primary" /><span className="relative h-2.5 w-2.5 rounded-full bg-primary" /></span>
              Currently reporting on rural education & agriculture
            </div>
          </div>

          <div className="relative mx-auto h-[400px] w-full max-w-[560px] sm:h-[500px] lg:h-[580px]">
            <div className="anim-scale-in absolute left-1/2 top-[14%] h-60 w-60 -translate-x-1/2 rounded-full bg-primary sm:h-80 sm:w-80 lg:h-96 lg:w-96" aria-hidden />
            <div className="absolute left-1/2 top-[10%] h-72 w-72 -translate-x-1/2 rounded-full border border-primary/30 sm:h-96 sm:w-96 lg:h-[28rem] lg:w-[28rem] anim-spin-slow" aria-hidden />
            <p className="anim-fade-in absolute left-0 top-6 hidden -rotate-12 font-script text-3xl leading-tight text-muted-foreground sm:block" style={{ animationDelay: "700ms" }}>
              People<br />Voices<br />Issues<br />Change
            </p>
            <img src={portrait} alt={`${NAME}, journalist`} width={896} height={1152} fetchPriority="high"
              className="anim-rise absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain" />
            <div className="anim-float absolute right-0 top-4 w-28 border-4 border-background shadow-xl sm:w-40" style={{ animationDelay: "0s" }}>
              <img src={school} alt="Reporting in a classroom" loading="lazy" width={1024} height={768} className="w-full grayscale" />
            </div>
            <div className="anim-float absolute left-0 bottom-24 w-28 border-4 border-background shadow-xl sm:w-40" style={{ animationDelay: "1.5s" }}>
              <img src={village} alt="Interview in a village" loading="lazy" width={1280} height={768} className="w-full" />
            </div>
            <div className="anim-fade-up absolute bottom-4 right-0 max-w-[200px] border-l-2 border-primary bg-background p-3 shadow-lg sm:p-4" style={{ animationDelay: "900ms" }}>
              <Quote className="h-4 w-4 text-primary" />
              <p className="mt-1 font-serif text-sm italic sm:text-base">Journalism is people's power in action.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <Container>
        <div className="grid grid-cols-2 gap-6 border-y border-border py-8 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-border">
          {STATS.map(({ icon: I, value, label }) => (
            <div key={label} className="flex items-center gap-4 lg:justify-center">
              <I className="h-8 w-8 shrink-0 text-primary" strokeWidth={1.4} />
              <div>
                <div className="text-xl font-bold">{value}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Featured */}
      <section id="reports" className="py-16">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.6fr_1.3fr]">
          <div>
            <span className="eyebrow">Featured Story</span>
            <h2 className="mt-4 text-5xl font-bold leading-tight">Voices from the Ground</h2>
            <p className="mt-4 text-sm text-muted-foreground">Stories that highlight real issues, people's struggles and the change they inspire in Haryana.</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" className="btn-primary">Read Full Story <ArrowRight className="h-4 w-4" /></a>
              <CircleBtn label="Previous"><ArrowLeft className="h-3 w-3" /></CircleBtn>
              <CircleBtn label="Next"><ArrowRight className="h-3 w-3" /></CircleBtn>
            </div>
          </div>
          <a href="#" className="img-zoom group relative block min-h-[360px]">
            <img src={farmer} alt="Interviewing a farmer in a wheat field" loading="lazy" width={1280} height={832} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-background">
              <span className="bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">Agriculture</span>
              <h3 className="mt-3 text-3xl font-bold leading-tight">Farmers' Challenges and Hopes in Haryana</h3>
              <div className="mt-2 flex justify-between gap-4 text-xs opacity-90"><span>Real stories from the fields, on policies, prices and the future.</span><span className="shrink-0">12 Oct 2025</span></div>
            </div>
          </a>
          <div className="divide-y divide-border">
            {SIDE_STORIES.map((s) => (
              <a key={s.title} href="#" className="group grid grid-cols-[120px_minmax(0,1fr)_auto] items-center gap-4 py-4 first:pt-0">
                <div className="img-zoom aspect-[4/3]"><img src={s.img} alt="" loading="lazy" className="h-full w-full object-cover" /></div>
                <div className="min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-primary">{s.cat}</div>
                  <h4 className="mt-1 font-semibold leading-snug group-hover:text-primary">{s.title}</h4>
                  <div className="mt-1 text-xs text-muted-foreground">{s.date}</div>
                </div>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Latest reports */}
      <section className="border-t border-border py-16">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div><span className="eyebrow">Latest Reports</span><h2 className="mt-3 text-4xl font-bold">From the Field</h2></div>
            <a href="#" className="hidden text-sm font-semibold text-primary hover:underline sm:block">View all reports →</a>
          </div>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {REPORTS.map((r) => (
              <a key={r.title} href="#" className="group">
                <div className="img-zoom aspect-[4/3]"><img src={r.img} alt="" loading="lazy" className="h-full w-full object-cover" /></div>
                <div className="mt-4 text-[10px] font-bold uppercase tracking-widest text-primary">{r.cat}</div>
                <h3 className="mt-1 text-lg font-bold leading-snug group-hover:text-primary">{r.title}</h3>
                <div className="mt-2 text-xs text-muted-foreground">{r.date}</div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Media outlets */}
      <Container>
        <div className="border-y border-border py-8">
          <span className="eyebrow">As Seen In</span>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-x-10 gap-y-4">
            {OUTLETS.map((o) => (
              <span key={o} className="font-serif text-lg font-bold text-muted-foreground transition-colors hover:text-foreground">{o}</span>
            ))}
          </div>
        </div>
      </Container>

      {/* Video */}
      <section id="media" className="py-16">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1.4fr_1fr]">
          <div>
            <span className="eyebrow">Video & Podcast</span>
            <h2 className="mt-4 text-4xl font-bold leading-tight">Real Conversations. Real Perspectives.</h2>
            <p className="mt-4 text-sm text-muted-foreground">Interviews, field reports and discussions on the issues that matter.</p>
            <a href="#" className="btn-primary mt-6">Watch All Videos <ArrowRight className="h-4 w-4" /></a>
          </div>
          <button onClick={() => setPlaying(!playing)} aria-label="Play featured interview" className="img-zoom group relative block min-h-[320px] text-left">
            <img src={village} alt="Women's Voices from Haryana" loading="lazy" width={1280} height={768} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
            <span className="absolute right-4 top-4 bg-foreground/70 px-2 py-1 text-xs text-background">12:34</span>
            <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-background text-primary shadow-xl transition-transform group-hover:scale-110">
              {playing ? <span className="text-xs font-bold">PAUSE</span> : <Play className="ml-1 h-7 w-7 fill-current" />}
            </span>
            <div className="absolute inset-x-0 bottom-0 p-6 text-background">
              <h3 className="text-2xl font-bold">Women's Voices from Haryana</h3>
              <p className="text-sm opacity-90">Stories of strength, struggle and change.</p>
            </div>
          </button>
          <div className="divide-y divide-border">
            {VIDEOS.map((v) => (
              <button key={v.title} className="group grid w-full grid-cols-[110px_minmax(0,1fr)] items-center gap-4 py-4 text-left first:pt-0">
                <div className="relative aspect-video overflow-hidden">
                  <img src={v.img} alt="" loading="lazy" className="h-full w-full object-cover" />
                  <span className="absolute inset-0 grid place-items-center"><span className="grid h-8 w-8 place-items-center rounded-full bg-background text-primary transition-transform group-hover:scale-110"><Play className="ml-0.5 h-3.5 w-3.5 fill-current" /></span></span>
                </div>
                <div className="min-w-0"><div className="font-serif font-semibold group-hover:text-primary">{v.title}</div><div className="text-xs text-muted-foreground">{v.time}</div></div>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Awards */}
      <section id="awards" className="border-t border-border py-16">
        <Container className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div>
            <span className="eyebrow">Awards & Recognition</span>
            <h2 className="mt-3 text-4xl font-bold">Milestones & Recognition</h2>
            <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
              {AWARDS.map(({ icon: I, title, sub }) => (
                <div key={title} className="flex items-start gap-3">
                  <I className="h-8 w-8 shrink-0 text-primary" strokeWidth={1.4} />
                  <div><div className="text-sm font-semibold">{title}</div><div className="text-xs text-muted-foreground">{sub}</div></div>
                </div>
              ))}
            </div>
          </div>
          <blockquote className="bg-accent p-8">
            <Quote className="h-7 w-7 text-primary" />
            <p className="mt-3 font-serif text-xl italic leading-snug">Stories from the heartland can shape policies, change lives and build a better Haryana.</p>
            <footer className="mt-4 text-right text-xs font-bold uppercase tracking-widest text-primary">— {NAME}</footer>
          </blockquote>
        </Container>
      </section>

      {/* Gallery */}
      <section id="gallery" className="border-t border-border py-16">
        <Container>
          <span className="eyebrow">Photo Gallery</span>
          <h2 className="mt-3 text-4xl font-bold">Moments from My Journey</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
            {GALLERY.map((g, i) => (
              <button key={i} onClick={() => setLightbox(g)} aria-label={`Open photo ${i + 1}`} className={`img-zoom aspect-[4/3] ${i % 2 ? "grayscale hover:grayscale-0" : ""} transition-[filter]`}>
                <img src={g} alt="" loading="lazy" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </Container>
      </section>
      {lightbox && (
        <div role="dialog" aria-modal className="fixed inset-0 z-50 grid place-items-center bg-foreground/90 p-6" onClick={() => setLightbox(null)}>
          <button aria-label="Close" className="absolute right-6 top-6 text-background"><X className="h-8 w-8" /></button>
          <img src={lightbox} alt="" className="max-h-[85vh] max-w-full" />
        </div>
      )}

      {/* About */}
      <section id="about" className="border-t border-border py-16">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div>
            <span className="eyebrow">About Me</span>
            <h2 className="mt-3 text-4xl font-bold">Reporting with Purpose</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {NAME} is an independent journalist and active member of Shramjeevi Patrakar Sangh Haryana, reporting on the lives, struggles and triumphs of ordinary people across the state. [Edit this biography.]
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Career Journey</h3>
            <ol className="mt-5 space-y-5 border-l border-border pl-6">
              {TIMELINE.map((t) => (
                <li key={t.year} className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
                  <div className="font-serif text-lg font-bold text-primary">{t.year}</div>
                  <div className="text-sm text-muted-foreground">{t.text}</div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="text-xl font-bold">Reporting Interests</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {INTERESTS.map((i) => <span key={i} className="border border-border px-3 py-1.5 text-sm transition-colors hover:border-primary hover:text-primary">{i}</span>)}
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="pb-16">
        <Container>
          <div className="flex flex-col gap-6 bg-accent p-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <PenTool className="h-12 w-12 shrink-0 text-primary" />
              <div>
                <h2 className="text-3xl font-bold">Let's Tell Better Stories Together</h2>
                <p className="mt-1 text-sm text-muted-foreground">For story tips, collaborations, media enquiries or just to say hello.</p>
                <div className="mt-2 flex flex-wrap gap-4 text-sm">
                  <a href="mailto:hello@example.com" className="flex items-center gap-1 hover:text-primary"><Mail className="h-4 w-4" /> hello@example.com</a>
                  <a href="tel:+910000000000" className="flex items-center gap-1 hover:text-primary"><Phone className="h-4 w-4" /> +91 00000 00000</a>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <a href="mailto:hello@example.com" className="btn-primary">Get in Touch <ArrowRight className="h-4 w-4" /></a>
              <Socials />
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <Container className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_auto]">
          <div>
            <div className="font-serif text-2xl font-bold uppercase">{NAME}</div>
            <div className="text-xs text-muted-foreground">{ROLE}</div>
            <p className="mt-3 text-sm text-muted-foreground">Stories that inform. Journalism that empowers.</p>
          </div>
          <div>
            <h4 className="font-sans text-sm font-bold">Quick Links</h4>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {NAV.map((n) => <li key={n}><a href={`#${n.toLowerCase()}`} className="hover:text-primary">{n}</a></li>)}
            </ul>
          </div>
          <div><h4 className="font-sans text-sm font-bold">Follow Me</h4><div className="mt-3"><Socials /></div></div>
          <p className="-rotate-12 self-center font-script text-3xl text-muted-foreground">Journalism<br />for People</p>
        </Container>
        <Container className="mt-10 text-xs text-muted-foreground">© {new Date().getFullYear()} {NAME}. All rights reserved.</Container>
      </footer>
    </div>
  );
}
