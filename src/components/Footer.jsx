import { ArrowUpRight, LinkedinLogo, FileText, EnvelopeSimple } from '@phosphor-icons/react';
import { SOCIAL } from '../data/projects.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-left">
            <p className="footer-name">Prince Patel</p>
            <p className="footer-copy">Designed & built by hand · {year}</p>
          </div>

          <div className="footer-links">
            <a href={SOCIAL.github} target="_blank" rel="noreferrer" className="footer-link">
              GitHub
              <ArrowUpRight className="footer-link-icon" size={12} weight="semibold" />
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="footer-link">
              LinkedIn
              <LinkedinLogo className="footer-link-icon" size={12} weight="semibold" />
            </a>
            <a href={SOCIAL.resume} target="_blank" rel="noreferrer" className="footer-link">
              Resume
              <FileText className="footer-link-icon" size={12} weight="semibold" />
            </a>
            <a href="mailto:prince240102@gmail.com" className="footer-link">
              Email
              <EnvelopeSimple className="footer-link-icon" size={12} weight="semibold" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
