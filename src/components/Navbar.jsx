import React, { useState } from 'react';
import {
  RiMenu3Line,
  RiCloseLine,
  RiPrinterLine,
  RiArrowRightUpLine
} from 'react-icons/ri';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="container navbar" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">
            <RiPrinterLine />
          </span>
          <span className="brand-copy">
            <strong>CONFIDENCIAL</strong>
            <span>DIGITAL WORLD</span>
          </span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>

        <div
          id="main-navigation"
          className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={link.href === '#home' ? 'nav-home' : ''}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="button button-dark nav-cta"
            onClick={closeMenu}
          >
            Let's Talk <RiArrowRightUpLine />
          </a>
        </div>
      </nav>
    </header>
  );
}
