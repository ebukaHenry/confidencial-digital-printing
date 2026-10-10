
export default function PortfolioCard({ item, index }) {
  return (
    <article
      className="portfolio-card"
      style={{ '--card-index': index }}
    >
      <div className="portfolio-image">
        <img src={item.image} alt={item.alt} loading="lazy" />
        <span className="portfolio-category">{item.category}</span>
      </div>

      <div className="portfolio-card-content">
        <h3>{item.title}</h3>
        <a href="#contact" aria-label={`Enquire about ${item.title}`}>
          Make an enquiry <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
