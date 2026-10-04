import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Building2, DraftingCompass, Facebook, HardHat, Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/tdm-hero.jpg";
import villa from "@/assets/tdm-villa.jpg";
import interior from "@/assets/tdm-interior.jpg";
import commercial from "@/assets/tdm-commercial.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TDM Architect & Engineering | Architecture in Sri Lanka" },
      { name: "description", content: "TDM Architect & Engineering creates thoughtful architectural designs, 3D visualizations and construction solutions in Sri Lanka." },
      { property: "og:title", content: "TDM Architect & Engineering | Architecture in Sri Lanka" },
      { property: "og:description", content: "Premium architectural, engineering and construction services in Sri Lanka." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { number: "01", icon: DraftingCompass, title: "Architectural Design", description: "Modern, aesthetic, and functional house plans tailored to your land and budget." },
  { number: "02", icon: Building2, title: "3D Visualization", description: "High-quality 3D exterior and interior designs that bring every detail into focus." },
  { number: "03", icon: HardHat, title: "Construction", description: "Full project management and construction with high-quality materials." },
];

const projects = [
  { image: villa, title: "Modern Villa", category: "Residential concept", width: 1104, height: 1312 },
  { image: interior, title: "Luxury Interior", category: "Interior concept", width: 1104, height: 912 },
  { image: commercial, title: "Commercial Space", category: "Commercial concept", width: 1104, height: 912 },
];

const qualifications = [
  { number: "01", title: "Design-led approach", description: "Thoughtful planning shaped around the site, the brief, and the people who will use the space." },
  { number: "02", title: "Technical precision", description: "Attention to proportion, detail, and the practical demands of bringing a design to life." },
  { number: "03", title: "Visual clarity", description: "3D views that help you understand a space before construction begins." },
  { number: "04", title: "Build perspective", description: "An approach that considers materials and construction alongside design intent." },
];

function Brand() {
  return <a href="#home" className="brand" aria-label="TDM Architects, back to home">
    <img src="/logo_removeback.png" alt="TDM Logo" className="brand-mark" width="64" height="64" onError={(e) => e.currentTarget.style.display = 'none'} />
    <span className="brand-name"><strong>TDM</strong><span>ARCHITECTS</span></span>
  </a>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    
    let observer: IntersectionObserver;
    const initObserver = () => {
      const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
      elements.forEach((element) => observer.observe(element));
      document.documentElement.classList.add("motion-ready");
    };

    initObserver();
    
    const timeout = setTimeout(() => {
      if (observer) observer.disconnect();
      initObserver();
    }, 500);

    return () => {
      clearTimeout(timeout);
      if (observer) observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const requirement = String(data.get("requirement") ?? "").trim();
    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\n\nRequirement:\n${requirement}`);
    window.location.href = `mailto:tdmarchitectss12@gmail.com?subject=${subject}&body=${body}`;
  }

  return <main>
    <header className="site-header">
        <div className="site-header-inner container-wide">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#purpose">Purpose</a><a href="#services">Services</a><a href="#portfolio">Portfolio</a><a href="#qualifications">Qualifications</a><a href="#contact">Contact</a>
          </nav>
          <Button variant="line" size="feature" className="header-quote" asChild><a href="#contact">Start a project <ArrowUpRight aria-hidden="true" /></a></Button>
          <Button variant="line" size="icon" className="mobile-menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">
          {[ ["Home", "home"], ["Purpose", "purpose"], ["Services", "services"], ["Portfolio", "portfolio"], ["Qualifications", "qualifications"], ["Contact", "contact"] ].map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={17} /></a>)}
        </nav>}
    </header>
    <section id="home" className="hero">
      <img className="hero-image" src={hero} alt="Contemporary tropical home with illuminated interiors and reflecting pool" width="1920" height="1200" fetchPriority="high" />
      <div className="hero-shade" />
      <div className="hero-gridline" aria-hidden="true" />

      <div className="hero-content container-wide">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> ARCHITECTURE · ENGINEERING · CONSTRUCTION</p>
          <h1><span>TDM</span><br />Architectural<br /><em>Excellence.</em></h1>
          <div className="hero-intro"><p className="hero-subtitle">Considered spaces, precise engineering, and construction built around the way you live. In Sri Lanka, from the first idea to the final detail.</p>
          <Button variant="hero" size="feature" asChild><a href="#contact">Get a Free Quote <ArrowUpRight aria-hidden="true" /></a></Button></div>
        </div>
      </div>
      <div className="hero-bottom container-wide"><span>DESIGNED WITH PURPOSE. BUILT TO LAST.</span><a href="#services" aria-label="Explore our services">EXPLORE OUR WORK <ArrowDown size={15} /></a></div>
    </section>

    <section id="purpose" className="purpose section-pad">
      <div className="container-wide purpose-grid" data-reveal>
        <div><p className="eyebrow"><span className="eyebrow-line" /> OUR PURPOSE</p><span className="purpose-number">01 / 04</span></div>
        <div><h2>Architecture with<br /><span>intention.</span></h2><p>To shape places that feel as good as they function—where design ambition meets everyday life, and every detail has a reason to be there.</p><a className="text-link" href="#services">Discover what we do <ArrowUpRight size={17} aria-hidden="true" /></a></div>
      </div>
    </section>

    <section id="services" className="services section-pad">
      <div className="container-wide">
        <div className="section-heading" data-reveal>
          <div><p className="eyebrow"><span className="eyebrow-line" /> WHAT WE DO</p><h2>Spaces that inspire.<br /><span>Solutions that endure.</span></h2></div>
          <p className="section-intro">From the first sketch to the final detail, we bring design vision and technical precision together.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => <article className="service-card" key={service.number} data-reveal>
            <div className="service-card-top"><service.icon size={32} strokeWidth={1.3} aria-hidden="true" /><span>{service.number} / 03</span></div>
            <div><h3>{service.title}</h3><p>{service.description}</p></div>
            <ArrowUpRight className="service-arrow" size={22} strokeWidth={1.5} aria-hidden="true" />
          </article>)}
        </div>
      </div>
    </section>

    <section id="portfolio" className="portfolio section-pad">
      <div className="container-wide">
        <div className="section-heading portfolio-heading" data-reveal>
          <div><p className="eyebrow"><span className="eyebrow-line" /> THE POSSIBILITIES</p><h2>Designed to make<br /><span>an impression.</span></h2></div>
          <p className="section-intro">Explore the kind of considered spaces we love to create. Imagery shown is conceptual inspiration.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => <article className={`project project-${index + 1}`} key={project.title} data-reveal>
            <div className="project-image-wrap"><img src={project.image} alt={`${project.title} architectural concept`} width={project.width} height={project.height} loading="lazy" /></div>
            <div className="project-overlay"><span>{project.category}</span><h3>{project.title}</h3><span className="project-index">0{index + 1} / 03</span></div>
          </article>)}
        </div>
      </div>
    </section>

    <section id="qualifications" className="qualifications section-pad">
      <div className="container-wide section-heading" data-reveal>
        <div><p className="eyebrow"><span className="eyebrow-line" /> QUALIFICATIONS</p><h2>Grounded in the<br /><span>way we work.</span></h2></div>
        <p className="section-intro">A considered approach to design, visualization, and construction.</p>
      </div>
      <div className="qualification-viewport" aria-label="Our areas of expertise">
        <div className="qualification-track">
          {[0, 1].map((copy) => <div className="qualification-set" key={copy} aria-hidden={copy === 1 ? "true" : undefined}>
            {qualifications.map((item) => <article className="qualification-item" key={`${copy}-${item.number}`}>
              <span className="qualification-index">{item.number} / 04</span>
              <h3>{item.title}</h3><p>{item.description}</p>
              <ArrowUpRight size={19} strokeWidth={1.4} aria-hidden="true" />
            </article>)}
          </div>)}
        </div>
      </div>
    </section>

    <section id="contact" className="contact section-pad">
      <div className="container-wide contact-grid">
        <div className="contact-copy" data-reveal>
          <p className="eyebrow"><span className="eyebrow-line" /> LET'S CONNECT</p>
          <h2>Have a vision?<br /><span>Let's build it.</span></h2>
          <p className="contact-intro">Tell us what you have in mind. We're ready to turn your ideas into a place you love.</p>
          <div className="contact-methods">
            <a href="https://wa.me/94761970767" target="_blank" rel="noopener noreferrer"><span className="contact-icon"><MessageCircle size={20} /></span><span><small>PHONE / WHATSAPP</small><strong>+94 76 197 0767</strong></span><ArrowUpRight size={18} /></a>
            <a href="mailto:tdmarchitectss12@gmail.com"><span className="contact-icon"><Mail size={20} /></span><span><small>EMAIL US</small><strong>tdmarchitectss12@gmail.com</strong></span><ArrowUpRight size={18} /></a>
            <a href="https://www.facebook.com/share/16F2X3wAF4j/" target="_blank" rel="noopener noreferrer"><span className="contact-icon"><Facebook size={20} /></span><span><small>FACEBOOK</small><strong>TDM Architect & Engineering</strong></span><ArrowUpRight size={18} /></a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} data-reveal>
          <div className="form-heading"><span>01 / YOUR ENQUIRY</span><ArrowRight size={20} aria-hidden="true" /></div>
          <label htmlFor="name">Your name</label><input id="name" name="name" type="text" placeholder="Full name" autoComplete="name" required />
          <label htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" placeholder="Your contact number" autoComplete="tel" required />
          <label htmlFor="requirement">Tell us about your project</label><textarea id="requirement" name="requirement" rows={4} placeholder="What are you looking to create?" required />
          <Button type="submit" variant="hero" size="feature" className="form-submit">Send Message <ArrowUpRight aria-hidden="true" /></Button>
          <p className="form-note">This opens your email app with your message ready to send.</p>
        </form>
      </div>
    </section>

    <footer className="footer"><div className="container-wide footer-inner"><Brand /><p>© 2026 TDM Architect &amp; Engineering. All Rights Reserved.</p><a href="tel:+94761970767" aria-label="Call TDM Architects"><Phone size={18} /></a></div></footer>
  </main>;
}