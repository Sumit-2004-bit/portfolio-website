import { motion } from 'framer-motion';
import { HiArrowDown, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';
import { hero, personal } from '../../data/portfolio';
import Button from '../ui/Button';
import FloatingShapes from '../ui/FloatingShapes';
import './Hero.css';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero section">
      <FloatingShapes />
      <div className="container hero__grid">
        <div className="hero__content">
          <motion.p
            className="hero__eyebrow"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <HiLocationMarker aria-hidden="true" />
            {personal.location} · Available for internships
          </motion.p>

          <motion.h1 className="hero__name" custom={1} initial="hidden" animate="visible" variants={fadeUp}>
            {personal.name}
          </motion.h1>

          <motion.p className="hero__role" custom={2} initial="hidden" animate="visible" variants={fadeUp}>
            {hero.headline}
          </motion.p>

          <motion.p className="hero__sub" custom={3} initial="hidden" animate="visible" variants={fadeUp}>
            {hero.subheadline}
          </motion.p>

          <motion.div className="hero__actions" custom={4} initial="hidden" animate="visible" variants={fadeUp}>
            <Button variant="primary" size="lg" onClick={() => scrollTo('projects')}>
              View Projects
            </Button>
            <Button href={personal.resumePath} variant="outline" size="lg" external>
              Download Resume
            </Button>
            <Button variant="ghost" size="lg" onClick={() => scrollTo('contact')}>
              Contact Me
            </Button>
          </motion.div>

          <motion.div className="hero__social" custom={5} initial="hidden" animate="visible" variants={fadeUp}>
            <a href={personal.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href={`mailto:${personal.email}`} aria-label="Email">
              {personal.email}
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="hero__card">
            <div className="hero__avatar" aria-hidden="true">
              <span>SD</span>
            </div>
            <div className="hero__card-body">
              <p className="hero__card-label">Currently</p>
              <p className="hero__card-title">Building with React.js</p>
              <ul className="hero__card-list">
                <li>Responsive UI</li>
                <li>Component architecture</li>
                <li>Clean, accessible markup</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={(e) => {
          e.preventDefault();
          scrollTo('about');
        }}
      >
        <HiArrowDown />
      </motion.a>
    </section>
  );
}
