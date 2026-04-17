import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, EnvelopeSimple, LinkedinLogo, FileText } from '@phosphor-icons/react';
import { STACK, SOCIAL } from '../data/projects.js';
import userPhoto from '../assets/user.webp';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section about-section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="section-label">About</p>
          <h2 className="section-title">The person behind the code</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-bio"
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
          >
            {/* Profile photo — slightly rotated, intentionally imperfect */}
            <motion.div
              className="about-photo-wrap"
              initial={{ opacity: 0, rotate: -4, scale: 0.92 }}
              animate={isInView ? { opacity: 1, rotate: -1.5, scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 180, damping: 18, delay: 0.25 }}
            >
              <img
                src={userPhoto}
                alt="Prince Patel"
                className="about-photo"
                loading="lazy"
              />
            </motion.div>

            <p className="about-lead">
              I build systems <em>other engineers actually use</em>.
            </p>
            <p className="about-body">
              My instinct is toward the full stack — not because I can't specialise,
              but because the interesting problems live at the boundaries. Between
              the Go backend and the React frontend. Between the FastAPI endpoint
              and the vector database. Between the Docker daemon and the developer
              hitting Deploy.
            </p>
            <p className="about-body">
              Most recently: a 289-file deployment platform that does what Coolify does,
              but I wrote every line. Right now I'm pulled toward developer infrastructure,
              AI agent orchestration, and making CLIs feel less terrible.
            </p>

            <div className="about-links">
              <a href={SOCIAL.github} target="_blank" rel="noreferrer" className="about-link">
                GitHub
                <ArrowUpRight className="about-link-icon" size={13} weight="semibold" />
              </a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="about-link">
                LinkedIn
                <LinkedinLogo className="about-link-icon" size={13} weight="semibold" />
              </a>
              <a href={SOCIAL.resume} target="_blank" rel="noreferrer" className="about-link">
                Resume
                <FileText className="about-link-icon" size={13} weight="semibold" />
              </a>
              <a href="mailto:prince240102@gmail.com" className="about-link">
                Email
                <EnvelopeSimple className="about-link-icon" size={13} weight="semibold" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="stack-section"
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.18 }}
          >
            {STACK.map((group) => (
              <div key={group.label} className="stack-group">
                <p className="stack-group-label">{group.label}</p>
                <div className="stack-group-items">
                  {group.items.map((item) => (
                    <span key={item} className="stack-item">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
