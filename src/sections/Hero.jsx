import React from 'react';
import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiMapPin2Line,
  RiPaletteLine
} from 'react-icons/ri';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-label">
            <span className="status-dot" />
            PRINTING · DESIGN · BRANDING
          </div>

          <h1>
            Ideas worth
            <br />
            seeing. <span>Print.</span>
            <br />
            Made to matter.
          </h1>

          <p className="hero-description">
            We turn creative ideas into tangible experiences through
            professional printing, thoughtful design and distinctive branding.
          </p>

          <div className="hero-actions">
            <a href="#portfolio" className="button button-gold">
              Explore Our Work <RiArrowRightLine />
            </a>
            <a href="#services" className="text-link">
              Discover our services <RiArrowRightUpLine />
            </a>
          </div>

          <div className="hero-actions">
            <WhatsAppButton>Discuss your project ↗</WhatsAppButton>
            <a href="#portfolio" className="button button-outline">
              Explore our work
            </a>
          </div>

          <div className="hero-footnote">
            <span><RiMapPin2Line /> Anambra State, Nigeria</span>
            <span>Serving Nigeria & international clients</span>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=90"
            alt="Printed stationery and notebooks arranged on a desk"
            fetchPriority="high"
          />
          <div className="hero-image-note">
            <span className="note-icon"><RiPaletteLine /></span>
            <span>
              <strong>Creativity meets quality.</strong>
              <small>Thoughtfully made. Beautifully presented.</small>
            </span>
          </div>
          <span className="hero-decoration" aria-hidden="true">CDW.</span>
        </div>
      </div>

      <div className="hero-bottom container">
        <span>MADE FOR BRANDS WITH A VISION</span>
        <a href="#services">Discover what we can create <RiArrowRightLine /></a>
      </div>
    </section>
  );
}
