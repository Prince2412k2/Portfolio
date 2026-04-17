import ScrollProgress from './components/ScrollProgress.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Projects from './components/Projects.jsx';
import DevTools from './components/DevTools.jsx';
import Experience from './components/Experience.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      {/* Film grain — raw texture overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Scroll progress — thin accent line at top */}
      <ScrollProgress />

      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <DevTools />
        <Experience />
        <About />
      </main>
      <Footer />
    </>
  );
}
