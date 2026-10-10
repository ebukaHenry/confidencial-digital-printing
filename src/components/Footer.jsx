import {
  RiPrinterLine,
  RiArrowUpLine
} from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <a href="#home" className="brand footer-brand">
          <span className="brand-mark"><RiPrinterLine /></span>
          <span className="brand-copy">
            <strong>CONFIDENCIAL</strong>
            <span>DIGITAL WORLD</span>
          </span>
        </a>

        <p>Creative ideas. Meaningful impressions.</p>

        <a href="#home" className="back-to-top">
          Back to top <RiArrowUpLine />
        </a>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Confidencial Digital World.
          All rights reserved.
        </span>
        <span>Anambra State, Nigeria</span>
      </div>
    </footer>
  );
}