import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteHeader, useReveal } from "@/components/SiteChrome";
import { company, principal, team } from "@/data/site";
import heroImg from "@/assets/tdm-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | TDM Architect & Engineering" },
      { name: "description", content: "Meet the team behind TDM Architect & Engineering — architects, engineers and 3D designers shaping considered spaces across Sri Lanka." },
    ],
  }),
  component: About,
});

const initials = (name: string) => name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

function Avatar({ photo, name, className }: { photo: string; name: string; className: string }) {
  return photo
    ? <img src={photo} alt={name} className={className} loading="lazy" />
    : <div className={`${className} avatar-fallback`} aria-hidden="true"><span>{initials(name)}</span></div>;
}

function AnimatedStat({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLElement>(null);
  
  const numMatch = value.match(/\d+/);
  const target = numMatch ? parseInt(numMatch[0], 10) : 0;
  const prefix = value.substring(0, numMatch?.index || 0);
  const suffix = value.substring((numMatch?.index || 0) + (numMatch?.[0].length || 0));

  useEffect(() => {
    if (!ref.current || hasAnimated || target === 0) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setHasAnimated(true);
        let startTimestamp: number;
        const duration = 1500;
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const easeOut = progress * (2 - progress);
          setCount(Math.floor(easeOut * target));
          
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            setCount(target);
          }
        };
        window.requestAnimationFrame(step);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  if (target === 0) return <strong>{value}</strong>;

  return <strong ref={ref}>{prefix}{hasAnimated ? count : 0}{suffix}</strong>;
}

function About() {
  useReveal();
  return <main>
    <SiteHeader />

    <section className="page-hero">
      <img className="page-hero-image" src={heroImg} alt="" aria-hidden="true" />
      <div className="page-hero-shade" />
      <div className="container-wide page-hero-content">
        <p className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> ABOUT TDM</p>
        <h1>Our <em>story.</em></h1>
        <p className="page-hero-sub">A studio of architects, engineers and designers building thoughtful spaces across Sri Lanka.</p>
      </div>
    </section>

    <section className="purpose section-pad">
      <div className="container-wide purpose-grid" data-reveal>
        <div><p className="eyebrow"><span className="eyebrow-line" /> WHO WE ARE</p><span className="purpose-number">01 / 03</span></div>
        <div>
          <h2>Designed with<br /><span>purpose.</span></h2>
          {company.story.map((p, i) => <p key={i}>{p}</p>)}
          <div className="about-stats">
            {company.stats.map((s) => <div key={s.label}><AnimatedStat value={s.value} /><span>{s.label}</span></div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="section-pad about-vm">
      <div className="container-wide vm-grid">
        <article className="service-card" data-reveal><div className="service-card-top"><span>VISION</span></div><div><h3>Our Vision</h3><p>{company.vision}</p></div></article>
        <article className="service-card" data-reveal><div className="service-card-top"><span>MISSION</span></div><div><h3>Our Mission</h3><p>{company.mission}</p></div></article>
      </div>
    </section>

    <section className="section-pad principal">
      <div className="container-wide principal-grid" data-reveal>
        <Avatar photo={principal.photo} name={principal.name} className="principal-photo" />
        <div>
          <p className="eyebrow"><span className="eyebrow-line" /> LEADERSHIP</p>
          <Quote className="principal-quote" size={42} strokeWidth={1.2} aria-hidden="true" />
          <blockquote>{principal.message}</blockquote>
          <h3>{principal.name}</h3>
          <span className="principal-role">{principal.role}</span>
        </div>
      </div>
    </section>

    <section className="section-pad team">
      <div className="container-wide">
        <div className="section-heading" data-reveal>
          <div><p className="eyebrow"><span className="eyebrow-line" /> OUR TEAM</p><h2>The people<br /><span>behind the work.</span></h2></div>
          <p className="section-intro">Engineers, designers and visualizers working together on every project.</p>
        </div>
        <div className="team-grid">
          {team.map((m, i) => <article className="team-card" key={i} data-reveal>
            <Avatar photo={m.photo} name={m.role} className="team-photo" />
            <div className="team-info"><h3>{m.name}</h3><span>{m.role}</span></div>
            <span className="team-index">{String(i + 1).padStart(2, "0")}</span>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section-pad page-cta">
      <div className="container-wide page-cta-inner" data-reveal>
        <h2>See what we've <span>built.</span></h2>
        <div className="page-cta-actions">
          <Button variant="hero" size="feature" asChild><Link to="/projects">View Recent Projects <ArrowUpRight aria-hidden="true" /></Link></Button>
          <Button variant="line" size="feature" asChild><a href="/contact">Start a project <ArrowUpRight aria-hidden="true" /></a></Button>
        </div>
      </div>
    </section>

    <SiteFooter />
  </main>;
}
