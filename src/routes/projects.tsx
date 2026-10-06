import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteHeader, useReveal } from "@/components/SiteChrome";
import { projects } from "@/data/site";
import heroImg from "@/assets/tdm-villa.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Recent Projects | TDM Architect & Engineering" },
      { name: "description", content: "Explore recent residential, interior and commercial projects by TDM Architect & Engineering in Sri Lanka." },
    ],
  }),
  component: Projects,
});

function Projects() {
  useReveal();
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return <main>
    <SiteHeader />
    <section className="page-hero">
      <img className="page-hero-image" src={heroImg} alt="" aria-hidden="true" />
      <div className="page-hero-shade" />
      <div className="container-wide page-hero-content">
        <p className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> PORTFOLIO</p>
        <h1>Recent <em>projects.</em></h1>
        <p className="page-hero-sub">A selection of homes, interiors and commercial spaces we've designed and built.</p>
      </div>
    </section>

    <section className="section-pad">
      <div className="container-wide">
        <div className="filter-bar" role="tablist">
          {categories.map((c) => <button key={c} id={`filter-${c.toLowerCase()}`} role="tab" aria-selected={filter === c} className={filter === c ? "is-active" : ""} onClick={() => setFilter(c)}>{c}</button>)}
        </div>
        <div className="projects-page-grid">
          {list.map((p, i) => <article className="pp-card" key={p.slug}>
            <div className="project-image-wrap"><img src={p.image} alt={`${p.title} — ${p.category} project in ${p.location}`} loading="lazy" /></div>
            <div className="pp-meta"><span>{p.category} · {p.location}</span><span>{p.year}</span></div>
            <h3>{p.title}</h3>
            <span className="pp-index">{String(i + 1).padStart(2, "0")}</span>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section-pad page-cta">
      <div className="container-wide page-cta-inner" data-reveal>
        <h2>Have a project <span>in mind?</span></h2>
        <div className="page-cta-actions"><Button variant="hero" size="feature" asChild><a href="/contact">Contact Us <ArrowUpRight aria-hidden="true" /></a></Button></div>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
