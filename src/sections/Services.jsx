import {
  RiArrowRightUpLine,
  RiArrowRightLine,
  RiMenu3Line,
  RiCloseLine,
  RiPrinterLine,
  RiPaletteLine,
  RiGiftLine,
  RiPriceTag3Line,
  RiBrushLine,
  RiBox3Line,
  RiWhatsappLine,
  RiMailLine,
  RiMapPin2Line,
  RiArrowUpLine,
} from 'react-icons/ri';
import services from '../data/services';
import SectionHeading from '../components/SectionHeading';


// const categories = ['All Work', 'Printing', 'Branding', 'Packaging', 'Merchandise'];
export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <SectionHeading
          eyebrow="WHAT WE DO"
          title={<>Creative thinking.<br />Exceptional presentation.</>}
          description="From everyday business essentials to distinctive branded experiences, we bring ideas to life through design and print."
        />

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.title} style={{ '--card-index': index }}>
                <div className="service-icon">
                  <Icon aria-hidden="true" />
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" aria-label={`Enquire about ${service.title}`}>
                  Discuss your project <RiArrowRightUpLine />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
