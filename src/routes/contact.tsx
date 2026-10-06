import { createFileRoute } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Clock, Facebook, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteHeader, useReveal } from "@/components/SiteChrome";
import heroImg from "@/assets/tdm-interior.jpg";

/* ---- Office location: update these later ----
 * OFFICE_MAP_EMBED: Google Maps → Share → "Embed a map" → copy the src="..." URL.
 * OFFICE_MAP_LINK:  Google Maps → Share → "Send a link" → copy the link.
 * Leave the embed empty ("") to show the styled placeholder box instead. */
const OFFICE_ADDRESS = "Office address — coming soon";
const OFFICE_MAP_EMBED = "";
const OFFICE_MAP_LINK = "https://maps.google.com";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | TDM Architect & Engineering" },
      { name: "description", content: "Get in touch with TDM Architect & Engineering. Call, WhatsApp, email or visit our office to start your project." },
    ],
  }),
  component: Contact,
});

function Contact() {
  useReveal();

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
    <SiteHeader />

    <section className="page-hero">
      <img className="page-hero-image" src={heroImg} alt="" aria-hidden="true" />
      <div className="page-hero-shade" />
      <div className="container-wide page-hero-content">
        <p className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> GET IN TOUCH</p>
        <h1>Let's <em>talk.</em></h1>
        <p className="page-hero-sub">Have a project in mind? Reach out — we'd love to hear about it.</p>
      </div>
    </section>

    <section className="contact section-pad">
      <div className="container-wide contact-grid">
        <div className="contact-copy" data-reveal>
          <p className="eyebrow"><span className="eyebrow-line" /> LET'S CONNECT</p>
          <h2>Have a vision?<br /><span>Let's build it.</span></h2>
          <p className="contact-intro">Tell us what you have in mind. We're ready to turn your ideas into a place you love.</p>
          <div className="contact-methods">
            <a href="tel:+94761970767"><span className="contact-icon"><Phone size={20} /></span><span><small>CALL US</small><strong>+94 76 197 0767</strong></span><ArrowUpRight size={18} /></a>
            <a href="https://wa.me/94761970767" target="_blank" rel="noopener noreferrer"><span className="contact-icon"><MessageCircle size={20} /></span><span><small>WHATSAPP</small><strong>Chat with us</strong></span><ArrowUpRight size={18} /></a>
            <a href="mailto:tdmarchitectss12@gmail.com"><span className="contact-icon"><Mail size={20} /></span><span><small>EMAIL US</small><strong>tdmarchitectss12@gmail.com</strong></span><ArrowUpRight size={18} /></a>
            <a href="https://www.facebook.com/share/16F2X3wAF4j/" target="_blank" rel="noopener noreferrer"><span className="contact-icon"><Facebook size={20} /></span><span><small>FACEBOOK</small><strong>TDM Architect &amp; Engineering</strong></span><ArrowUpRight size={18} /></a>
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

    <section className="office section-pad" id="office">
      <div className="container-wide">
        <div className="office-head" data-reveal>
          <p className="eyebrow"><span className="eyebrow-line" /> VISIT US</p>
          <h2>Our <em>office.</em></h2>
        </div>
        <div className="office-grid" data-reveal>
          <div className="office-map">
            {OFFICE_MAP_EMBED ? (
              <iframe title="TDM office location" src={OFFICE_MAP_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            ) : (
              <div className="office-map-placeholder">
                <div className="office-map-grid" aria-hidden="true" />
                <span className="office-pin"><MapPin size={28} /></span>
                <p>Map coming soon</p>
              </div>
            )}
          </div>
          <aside className="office-info">
            <div className="office-row"><span className="contact-icon"><MapPin size={20} /></span><div><small>ADDRESS</small><strong>{OFFICE_ADDRESS}</strong></div></div>
            <div className="office-row"><span className="contact-icon"><Clock size={20} /></span><div><small>OPENING HOURS</small><strong>Mon – Sat · 8:30 AM – 5:30 PM</strong></div></div>
            <div className="office-row"><span className="contact-icon"><Phone size={20} /></span><div><small>PHONE</small><strong>+94 76 197 0767</strong></div></div>
            <Button variant="hero" size="feature" asChild><a href={OFFICE_MAP_LINK} target="_blank" rel="noopener noreferrer">Get Directions <ArrowUpRight aria-hidden="true" /></a></Button>
          </aside>
        </div>
      </div>
    </section>

    <SiteFooter />
  </main>;
}
