import React, { useState } from 'react';
import {
  RiArrowRightLine,
  RiArrowRightUpLine
} from 'react-icons/ri';
import portfolio from '../data/portfolio.js';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All Work');

  const filteredPortfolio =
    activeCategory === 'All Work'
      ? portfolio
      : portfolio.filter((item) => item.type === activeCategory);

  const categories = ['All Work', ...new Set(portfolio.map((item) => item.type))];

  function SectionHeading({ eyebrow, title, description }) {
    return (
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
    );
  }

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <div className="portfolio-heading-row">
          <SectionHeading
            eyebrow="SELECTED PROJECTS"
            title={<>Work that speaks<br />for your brand.</>}
            description="Explore a selection of creative inspiration across print, branding and promotional design."
          />
          <a href="#contact" className="text-link portfolio-contact">
            Have a project in mind? <RiArrowRightUpLine />
          </a>
        </div>

        <div className="portfolio-filters" aria-label="Filter portfolio">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={activeCategory === category ? 'filter-active' : ''}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredPortfolio.map((item, index) => (
            <article className="portfolio-card" key={item.title}>
              <div className="portfolio-image-wrap">
                <img
                  src={item.image}
                  alt={`${item.category} portfolio inspiration`}
                  loading="lazy"
                  decoding="async"
                />
                <span className="portfolio-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <a
                  href="#contact"
                  className="portfolio-arrow"
                  aria-label={`Enquire about ${item.title}`}
                >
                  <RiArrowRightUpLine />
                </a>
              </div>
              <div className="portfolio-card-info">
                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
                <RiArrowRightLine />
              </div>
            </article>
          ))}
        </div>

        <p className="portfolio-note">
          Portfolio images are temporary visual placeholders. Actual completed
          client projects should replace them before publication.
        </p>
      </div>
    </section>
  );
}
