import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteHeader, useReveal } from "@/components/SiteChrome";
import { workProcess, services } from "@/data/site";
import heroImg from "@/assets/tdm-commercial.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | TDM Architect & Engineering" },
      { name: "description", content: "Architectural design, 3D visualization, structural engineering, interior design and construction services across Sri Lanka." },
    ],
  }),
  component: Services,
});

function Services() {
  useReveal();
  return <main>
    <SiteHeader />

    <section className="page-hero">
      <img className="page-hero-image" src={heroImg} alt="" aria-hidden="true" />
      <div className="page-hero-shade" />
      <div className="container-wide page-hero-content">
        <p className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> WHAT WE DO</p>
        <h1>Our <em>services.</em></h1>
        <p className="page-hero-sub">Everything you need to go from an idea to a finished building â€” under one roof.</p>
      </div>
    </section>

    <section className="section-pad">
      <div className="container-wide">
        <div className="section-heading" data-reveal>
          <div><p className="eyebrow"><span className="eyebrow-line" /> FULL SERVICE</p><h2>Design. Engineer.<br /><span>Build.</span></h2></div>
          <p className="section-intro">Pick a single service or let us handle the entire journey from first sketch to final handover.</p>
        </div>
        <div className="svc-list">
          {services.map((s) => <article className="svc-row" key={s.slug} id={s.slug} data-reveal>
            <span className="svc-num">{s.number}</span>
            <div className="svc-main"><h3>{s.title}</h3><p>{s.summary}</p></div>
            <ul className="svc-includes">{s.includes.map((i) => <li key={i}><Check size={15} strokeWidth={2} />{i}</li>)}</ul>
            <a className="svc-arrow" href="/contact" aria-label={`Enquire about ${s.title}`}><ArrowUpRight size={20} /></a>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section-pad svc-process">
      <div className="container-wide">
        <div className="section-heading" data-reveal>
          <div><p className="eyebrow"><span className="eyebrow-line" /> HOW WE WORK</p><h2>A clear process,<br /><span>start to finish.</span></h2></div>
        </div>
        <div className="process-grid">
          {workProcess.map((p) => <article className="process-step" key={p.step} data-reveal>
            <span className="process-num">{p.step}</span><h3>{p.title}</h3><p>{p.text}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section-pad page-cta">
      <div className="container-wide page-cta-inner" data-reveal>
        <h2>Ready to <span>begin?</span></h2>
        <div className="page-cta-actions"><Button variant="hero" size="feature" asChild><a href="/contact">Contact Us <ArrowUpRight aria-hidden="true" /></a></Button></div>
      </div>
    </section>

    <SiteFooter />
  </main>;
}
