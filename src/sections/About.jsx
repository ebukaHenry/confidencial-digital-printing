import WhatsAppButton from '../components/WhatsAppButton';
import {
  RiArrowRightLine,
  RiBrushLine
} from 'react-icons/ri';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className="about-visual">
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=85"
            alt="Creative planning and design workspace"
            loading="lazy"
          />
          <div className="about-stamp">
            <RiBrushLine />
            <span>IDEAS INTO<br />REALITY</span>
          </div>
        </div>

        <div className="about-copy">
          <p className="eyebrow">ABOUT CONFIDENCIAL</p>
          <h2>
            More than printing.
            <br />
            <span>It's your impression.</span>
          </h2>
          <p>
            At Confidencial Digital World, we believe the way you present your
            ideas matters. Our focus is on helping businesses, organizations
            and individuals communicate through creative design, print and
            branded materials.
          </p>
          <p>
            From a simple print job to a wider branding project, we aim to
            make the process clear, collaborative and focused on your needs.
          </p>
          <ul className="about-points">
            <li>Creative design tailored to your brand</li>
            <li>Printing and branding solutions in one place</li>
            <li>Service for individuals and businesses</li>
          </ul>

          {/* <a href="#contact" className="button button-dark">
            Let's Create Together <RiArrowRightLine />
          </a> */}
          <WhatsAppButton>Let's discuss your idea</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
