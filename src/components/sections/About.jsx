import { motion } from 'framer-motion';
import { about } from '../../data/portfolio';
import ScrollReveal from '../ui/ScrollReveal';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <ScrollReveal>
          <p className="section-label">About Me</p>
          <h2 className="section-title">Crafting interfaces recruiters can scan in seconds</h2>
          <p className="section-subtitle">
            A focused snapshot of who I am and what I bring to your team.
          </p>
        </ScrollReveal>

        <div className="about__grid">
          <ScrollReveal className="about__text" delay={0.1}>
            <p>{about.objective}</p>
            <p className="about__note">
              I prioritize readable code, accessible layouts, and polished details—skills I apply
              on every project from coursework to production-ready builds.
            </p>
          </ScrollReveal>

          <div className="about__stats">
            {about.highlights.map((item, i) => (
              <ScrollReveal key={item.label} delay={0.08 * i}>
                <motion.div
                  className="about__stat"
                  whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="about__stat-value">{item.value}</span>
                  <span className="about__stat-label">{item.label}</span>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
