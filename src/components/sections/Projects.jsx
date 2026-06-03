import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../../data/portfolio';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';
import './Projects.css';

function ProjectCard({ project, index }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.article
        className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {project.featured && <span className="project-card__badge">Featured</span>}
        <div className="project-card__image-wrap">
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            decoding="async"
            width={640}
            height={360}
          />
        </div>
        <div className="project-card__body">
          <p className="project-card__subtitle">{project.subtitle}</p>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__desc">{project.description}</p>
          <ul className="project-card__tech">
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <div className="project-card__actions">
            <Button href={project.github} variant="secondary" size="sm" external>
              <FaGithub /> GitHub
            </Button>
            <Button href={project.live} variant="outline" size="sm" external>
              <HiExternalLink /> Live Demo
            </Button>
          </div>
        </div>
      </motion.article>
    </ScrollReveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <ScrollReveal>
          <p className="section-label">Projects</p>
          <h2 className="section-title">Real work that shows how I build</h2>
          <p className="section-subtitle">
            Selected applications demonstrating React, responsive design, and full-stack integration.
          </p>
        </ScrollReveal>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
