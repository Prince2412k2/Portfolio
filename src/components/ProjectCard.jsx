import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Lock } from '@phosphor-icons/react';

const CARD_VARIANTS = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] } },
};

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const { id, name, tagline, description, stack, status, isPrivate, href, demo } = project;

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
    el.style.setProperty('--spotlight-opacity', '1');
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty('--spotlight-opacity', '0');
  };

  return (
    <motion.div
      ref={cardRef}
      className={`project-card card-${id}`}
      variants={CARD_VARIANTS}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-spotlight" aria-hidden="true" />

      <div className="card-body">
        <div className="card-top">
          <div className="card-badges">
            <span
              className={`status-dot ${status === 'active' ? 'status-active' : 'status-complete'}`}
              title={status === 'active' ? 'Actively developed' : 'Complete'}
            />
            {isPrivate && (
              <span className="badge-private">
                <Lock size={9} weight="fill" />
                private
              </span>
            )}
          </div>

          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="card-link"
            aria-label={`View ${name} on GitHub`}
          >
            <ArrowUpRight size={13} weight="semibold" />
          </a>
        </div>

        <h3 className="card-name">{name}</h3>
        <p className="card-tagline">{tagline}</p>
        <p className="card-desc">{description}</p>

        <div className="card-footer">
          <div className="stack-pills">
            {stack.map((s) => (
              <span key={s} className="stack-pill">{s}</span>
            ))}
          </div>

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="card-demo-link"
            >
              Live demo
              <ArrowUpRight size={11} weight="semibold" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
