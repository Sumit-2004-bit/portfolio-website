import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { navLinks, personal } from '../../data/portfolio';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import Button from '../ui/Button';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(navLinks.map((l) => l.id));

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a
          href="#home"
          className="navbar__brand"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('home');
          }}
        >
          <span className="navbar__brand-mark">SD</span>
          <span className="navbar__brand-text">{personal.name.split(' ')[0]}</span>
        </a>

        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`navbar__link ${activeId === link.id ? 'navbar__link--active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.id);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          href={`mailto:${personal.email}`}
          variant="primary"
          size="sm"
          className="navbar__cta"
        >
          Hire Me
        </Button>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.id);
                    }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
