import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Terminal } from '@phosphor-icons/react';
import { DEVTOOLS } from '../data/projects.js';

const GRID_VARIANTS = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const CARD_VARIANTS = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
};

function ToolCard({ tool }) {
  const { name, cmd, tagline, description, stack, href } = tool;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="devtool-card"
      variants={CARD_VARIANTS}
      whileTap={{ scale: 0.98 }}
    >
      <div className="devtool-cmd">
        <Terminal size={11} weight="bold" className="devtool-icon" />
        <span>$ {cmd}</span>
      </div>

      <h3 className="devtool-name">{name}</h3>
      <p className="devtool-tagline">{tagline}</p>
      <p className="devtool-desc">{description}</p>

      <div className="devtool-footer">
        <div className="devtool-stack">
          {stack.map((s) => (
            <span key={s} className="devtool-tag">{s}</span>
          ))}
        </div>
        <span className="devtool-arrow">
          <ArrowUpRight size={12} weight="semibold" />
        </span>
      </div>
    </motion.a>
  );
}

export default function DevTools() {
  const ref = useRef(null);
  const headerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section className="section devtools-section" id="tools">
      <div className="container">
        <motion.div
          ref={headerRef}
          className="section-header"
          initial={{ opacity: 0, y: 14 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="section-label">Developer Tools</p>
          <h2 className="section-title">Built for the terminal</h2>
          <p className="section-sub">
            The things I build when I'm tired of the tools that exist.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="devtools-grid"
          variants={GRID_VARIANTS}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {DEVTOOLS.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
