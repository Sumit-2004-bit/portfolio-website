import { motion } from 'framer-motion';
import { HiAcademicCap } from 'react-icons/hi';
import { education } from '../../data/portfolio';
import ScrollReveal from '../ui/ScrollReveal';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <ScrollReveal>
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic foundation</h2>
          <p className="section-subtitle">
            Engineering background with a focus on information technology and software development.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <motion.div
            className="education__card"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="education__icon" aria-hidden="true">
              <HiAcademicCap />
            </div>
            <div>
              <h3 className="education__degree">{education.degree}</h3>
              <p className="education__school">{education.institution}</p>
              <div className="education__meta">
                <span>{education.period}</span>
                <span className="education__cgpa">CGPA: {education.cgpa}</span>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
