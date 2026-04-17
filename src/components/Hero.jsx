import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from '@phosphor-icons/react';
import { BIO_QUOTE } from '../data/projects.js';

const CHARS = 'ABCDEFGHJKMNPQRSTWXYZabcdefghjkmnpqrstwxyz#$%@&';

function useScramble(text, delay = 250) {
  const [out, setOut] = useState(() => text.replace(/[^\n ]/g, '·'));
  const raf = useRef(null);

  useEffect(() => {
    let frame = 0;
    const total = 20;

    const tick = () => {
      frame++;
      const ratio = frame / total;
      setOut(
        text
          .split('')
          .map((ch, i) => {
            if (ch === '\n' || ch === ' ' || ch === '.') return ch;
            if (i / text.length < ratio) return ch;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );
      if (frame < total) {
        raf.current = requestAnimationFrame(tick);
      } else {
        setOut(text);
      }
    };

    const t = setTimeout(() => { raf.current = requestAnimationFrame(tick); }, delay);
    return () => { clearTimeout(t); cancelAnimationFrame(raf.current); };
  }, [text, delay]);

  return out;
}

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const FADE_UP = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.23, 1, 0.32, 1] } },
};

export default function Hero() {
  const fullName = 'Prince\nPatel.';
  const scrambled = useScramble(fullName, 300);
  // Split back for rendering with <br/>
  const [line1, line2] = scrambled.split('\n');

  return (
    <section className="hero" id="home">
      {/* Barely-visible decorative circles — imperfect placement */}
      <div className="hero-deco" aria-hidden="true">
        <div className="deco-circle deco-1" />
        <div className="deco-circle deco-2" />
        <div className="deco-circle deco-3" />
      </div>

      <div className="container">
        <motion.div
          className="hero-content"
          variants={STAGGER}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={FADE_UP}>
            <span className="badge-dot" />
            Available · Systems Engineer
          </motion.div>

          {/* Name uses scramble — renders character-by-character resolve */}
          <motion.h1
            className="hero-name"
            variants={FADE_UP}
            aria-label="Prince Patel."
          >
            {line1}
            <br />
            {line2}
          </motion.h1>

          <motion.blockquote className="hero-quote" variants={FADE_UP}>
            "{BIO_QUOTE}"
          </motion.blockquote>
        </motion.div>

        <motion.div
          className="hero-rule"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.55 }}
        />

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1], delay: 0.65 }}
        >
          <p className="hero-desc">
            Building deployment platforms, AI orchestration layers,
            and the CLI tools engineers actually reach for.
            In Go, Python, and TypeScript.
          </p>

          <div className="hero-actions">
            <a href="#work" className="btn-primary">
              See the work
              <ArrowDown size={13} weight="semibold" />
            </a>
            <a
              href="https://github.com/Prince2412k2"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              GitHub
              <ArrowUpRight className="ghost-icon" size={13} weight="semibold" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
