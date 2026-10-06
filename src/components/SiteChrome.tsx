import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Facebook, Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function Brand() {
  return <Link to="/" className="brand" aria-label="TDM Architects, back to home">
    <img src="/logo_removeback.png" alt="TDM Logo" className="brand-mark" width="64" height="64" onError={(e) => e.currentTarget.style.display = 'none'} />
    <span className="brand-name"><strong>TDM</strong><span>ARCHITECTS</span></span>
  </Link>;
}

function NavLink({ href, label, onClick, arrow }: { href: string; label: string; onClick?: () => void; arrow?: boolean }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const active = !href.includes("#") && path === href;
  const inner = <>{label}{arrow && <ArrowUpRight size={17} />}</>;
  if (href.includes("#")) return <a href={href} onClick={onClick}>{inner}</a>;
  return <Link to={href} onClick={onClick} className={active ? "is-active" : undefined}>{inner}</Link>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="site-header-inner container-wide">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((n) => <NavLink key={n.href} {...n} />)}
      </nav>
      <Button variant="line" size="feature" className="header-quote" asChild><a href="/contact">Start a project <ArrowUpRight aria-hidden="true" /></a></Button>
      <Button variant="line" size="icon" className="mobile-menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">
      {navItems.map((n) => <NavLink key={n.href} {...n} arrow onClick={() => setOpen(false)} />)}
    </nav>}
  </header>;
}

export function SiteFooter() {
  const socials = [
    { label: "Facebook", href: "https://www.facebook.com/share/16F2X3wAF4j/", icon: Facebook, ext: true },
    { label: "WhatsApp", href: "https://wa.me/94761970767", icon: MessageCircle, ext: true },
    { label: "Call", href: "tel:+94761970767", icon: Phone, ext: false },
    { label: "Email", href: "mailto:tdmarchitectss12@gmail.com", icon: Mail, ext: false },
  ];
  return <footer className="site-footer">
    <div className="container-wide footer-grid">
      <div className="footer-brand">
        <Brand />
        <p>Architecture, engineering and construction — designed with purpose, built to last. Across Sri Lanka.</p>
        <div className="footer-socials">
          {socials.map((s) => <a key={s.label} href={s.href} aria-label={s.label} title={s.label} {...(s.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}><s.icon size={17} strokeWidth={1.6} /></a>)}
        </div>
      </div>
      <nav className="footer-col" aria-label="Footer navigation">
        <h4>Explore</h4>
        {navItems.map((n) => <NavLink key={n.href} {...n} />)}
      </nav>
      <div className="footer-col">
        <h4>Contact</h4>
        <a href="tel:+94761970767">+94 76 197 0767</a>
        <a href="mailto:tdmarchitectss12@gmail.com">tdmarchitectss12@gmail.com</a>
        <span>Sri Lanka</span>
      </div>
      <div className="footer-col footer-cta">
        <h4>Start a project</h4>
        <p>Have a vision? Let's build it together.</p>
        <a className="footer-cta-btn" href="/contact">Contact Us <ArrowUpRight size={16} /></a>
      </div>
    </div>
    <div className="container-wide footer-bottom">
      <span>© {new Date().getFullYear()} TDM Architect &amp; Engineering. All rights reserved.</span>
      <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Back to top ↑</a>
    </div>
  </footer>;
}

/** Fades in every element marked with `data-reveal` when scrolled into view. */
export function useReveal() {
  useEffect(() => {
    let observer: IntersectionObserver;
    const init = () => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); observer.unobserve(e.target); } });
      }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)").forEach((el) => observer.observe(el));
      document.documentElement.classList.add("motion-ready");
    };
    init();
    const t = setTimeout(() => { observer?.disconnect(); init(); }, 500);
    return () => { clearTimeout(t); observer?.disconnect(); };
  }, []);
}
