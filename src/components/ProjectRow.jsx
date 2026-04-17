import { motion } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';

const ROW_VARIANTS = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
};

export default function ProjectRow({ project, index }) {
  const { name, tagline, stack, status, isPrivate, href, demo } = project;
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div className="project-row" variants={ROW_VARIANTS}>
      <div className="project-row-inner">

        <span className="project-num">{num}</span>

        <div className="project-main">
          <div className="project-header">
            <h3 className="project-name">{name}</h3>
            <span className="project-status">
              <span className={`status-pip ${status === 'active' ? 'pip-active' : 'pip-complete'}`} />
              {status}
            </span>
            {isPrivate && <span className="badge-priv">private</span>}
          </div>

          <p className="project-tagline">{tagline}</p>

          <div className="project-stack">
            {stack.map((s) => (
              <span key={s} className="stack-tag">{s}</span>
            ))}
          </div>
        </div>

        <div className="project-links">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="project-link-btn"
            aria-label={`${name} on GitHub`}
          >
            <ArrowUpRight size={13} weight="semibold" />
          </a>
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" className="project-demo-link">
              live demo
            </a>
          )}
        </div>

      </div>
    </motion.div>
  );
}
