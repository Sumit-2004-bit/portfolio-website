import { motion } from 'framer-motion';
import { HiMail, HiPhone } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { personal } from '../../data/portfolio';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';
import './Contact.css';

const contactLinks = [
  {
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: HiMail,
  },
  {
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, '')}`,
    icon: HiPhone,
  },
  {
    label: 'LinkedIn',
    value: 'sumit-deshmukh25',
    href: personal.linkedIn,
    icon: FaLinkedinIn,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/Sumit-2004-bit',
    href: personal.github,
    icon: FaGithub,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <ScrollReveal>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let&apos;s connect</h2>
          <p className="section-subtitle">
            Open to internships and entry-level frontend roles. Reach out—I typically respond within
            24 hours.
          </p>
        </ScrollReveal>

        <div className="contact__grid">
          <div className="contact__cards">
            {contactLinks.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.08}>
                <motion.a
                  href={item.href}
                  className="contact-card"
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -4, borderColor: 'var(--color-primary)' }}
                >
                  <span className="contact-card__icon">
                    <item.icon />
                  </span>
                  <div>
                    <span className="contact-card__label">{item.label}</span>
                    <span className="contact-card__value">{item.value}</span>
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="contact__cta" delay={0.2}>
            <div className="contact__cta-box">
              <h3>Ready to hire a motivated frontend developer?</h3>
              <p>
                I&apos;d love to discuss internships, graduate roles, or project collaborations.
              </p>
              <Button href={`mailto:${personal.email}`} variant="primary" size="lg">
                Send an Email
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
