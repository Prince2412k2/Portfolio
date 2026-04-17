const TECH = [
  'Go', 'Python', 'TypeScript', 'FastAPI', 'React',
  'Next.js', 'Docker', 'PostgreSQL', 'Qdrant', 'CrewAI',
  'Bubble Tea', 'WebSocket', 'Supabase', 'Django', 'SQLite',
];

function MarqueeRow() {
  return (
    <div className="marquee-track">
      {/* Duplicate for seamless loop */}
      {[...TECH, ...TECH].map((t, i) => (
        <span key={i} className="marquee-item">
          {t}
          <span className="marquee-sep" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-fade-left" />
      <div className="marquee-fade-right" />
      <MarqueeRow />
    </div>
  );
}
