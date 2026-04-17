import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { EXPERIENCE } from '../data/projects.js';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="section experience-section" id="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="section-label">Background</p>
          <h2 className="section-title">Where I've been</h2>
        </motion.div>

        <div className="timeline">
          {/* The line that draws itself on scroll */}
          <motion.div
            className="timeline-track"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
          />

          {EXPERIENCE.map((item, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: -14 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.55,
                ease: [0.23, 1, 0.32, 1],
                delay: 0.3 + i * 0.13,
              }}
            >
              {/* Dot pops with spring */}
              <motion.span
                className={`timeline-dot ${item.active ? 'dot-active' : ''}`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  type: 'spring',
                  stiffness: 320,
                  damping: 18,
                  delay: 0.38 + i * 0.13,
                }}
              />

              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{item.title}</h3>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <p className="timeline-place">{item.place}</p>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
