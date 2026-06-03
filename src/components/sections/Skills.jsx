import { motion } from 'framer-motion';
import { skillCategories } from '../../data/portfolio';
import ScrollReveal from '../ui/ScrollReveal';
import SkillIcon from './SkillIcon';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <ScrollReveal>
          <p className="section-label">Skills</p>
          <h2 className="section-title">Technologies I work with daily</h2>
          <p className="section-subtitle">
            From markup to React—organized so hiring managers see your stack at a glance.
          </p>
        </ScrollReveal>

        <div className="skills__categories">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.title} delay={catIndex * 0.08}>
              <div className="skills__category">
                <h3 className="skills__category-title">{category.title}</h3>
                <div className="skills__grid">
                  {category.skills.map((skill) => (
                    <motion.article
                      key={`${category.title}-${skill.name}`}
                      className="skill-card"
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    >
                      <span className="skill-card__icon">
                        <SkillIcon name={skill.icon} />
                      </span>
                      <span className="skill-card__name">{skill.name}</span>
                    </motion.article>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
