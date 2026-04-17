import { motion } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';
import { SOCIAL } from '../data/projects.js';

export default function Navbar() {
  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="container navbar-inner">
        <a href="#home" className="nav-logo">Prince Patel</a>

        <nav className="nav-links">
          <a href="#work"       className="nav-link">Work</a>
          <a href="#tools"      className="nav-link">Tools</a>
          <a href="#experience" className="nav-link">Background</a>
          <a href="#about"      className="nav-link">About</a>
        </nav>

        <a
          href={SOCIAL.github}
          target="_blank"
          rel="noreferrer"
          className="nav-cta"
        >
          GitHub
          <ArrowUpRight className="nav-cta-icon" size={12} weight="bold" />
        </a>
      </div>
    </motion.header>
  );
}
