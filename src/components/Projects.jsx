import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PROJECTS } from '../data/projects.js';
import ProjectRow from './ProjectRow.jsx';

const LIST_VARIANTS = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export default function Projects() {
  const ref = useRef(null);
  const headerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section className="section" id="work">
      <div className="container">
        <motion.div
          ref={headerRef}
          className="section-header"
          initial={{ opacity: 0, y: 14 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="section-label">Selected Work</p>
          <h2 className="section-title">Things I've shipped</h2>
        </motion.div>
      </div>

      {/* Full-width list — rows extend edge-to-edge with container padding inside */}
      <motion.div
        ref={ref}
        className="projects-list"
        variants={LIST_VARIANTS}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {PROJECTS.map((project, i) => (
          <div key={project.id} className="container">
            <ProjectRow project={project} index={i} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
