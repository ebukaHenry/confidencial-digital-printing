import {
  RiArrowRightUpLine,
  RiMailLine,
  RiMapPin2Line,
  RiWhatsappLine
} from 'react-icons/ri';
import WhatsAppButton from '../components/WhatsAppButton';

const BUSINESS_EMAIL = import.meta.env.VITE_BUSINESS_EMAIL;

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">
        <div>
          <p className="eyebrow eyebrow-light">HAVE A PROJECT IN MIND?</p>
          <h2>
            Let's make something
            <br />
            <span>worth remembering.</span>
          </h2>
          <p>
            Tell us what you're working on. Let's explore how we can help
            bring your next printing or creative project to life.
          </p>
        </div>

        <div className="contact-actions">
          <WhatsAppButton className="button button-gold">
            <RiWhatsappLine /> Start an Enquiry <RiArrowRightUpLine />
          </WhatsAppButton>

          {BUSINESS_EMAIL && (
            <a
              href={`mailto:${BUSINESS_EMAIL}`}
              className="contact-email"
            >
              <RiMailLine /> {BUSINESS_EMAIL}
            </a>
          )}

          <span><RiMapPin2Line />Shop 24 Alliance Plaza, Old Road Nkpor <br /> Anambra State, Nigeria</span>
          <span>Available to serve clients across Nigeria and overseas.</span>
        </div>
      </div>
    </section>
  );
}
