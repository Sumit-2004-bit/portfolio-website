import { motion } from 'framer-motion';
import { HiBadgeCheck } from 'react-icons/hi';
import { certifications } from '../../data/portfolio';
import ScrollReveal from '../ui/ScrollReveal';
import './Certifications.css';

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <ScrollReveal>
          <p className="section-label">Certifications</p>
          <h2 className="section-title">Continuous learning credentials</h2>
          <p className="section-subtitle">
            Industry-recognized certificates that complement hands-on project experience.
          </p>
        </ScrollReveal>

        <ul className="certifications__list">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={i * 0.08}>
              <motion.li
                className="cert-card"
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <span className="cert-card__icon" aria-hidden="true">
                  <HiBadgeCheck />
                </span>
                <div>
                  <h3 className="cert-card__title">{cert.title}</h3>
                  <p className="cert-card__meta">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </motion.li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
