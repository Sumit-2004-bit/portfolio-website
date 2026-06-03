import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import './styles/global.css';

const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Certifications = lazy(() => import('./components/sections/Certifications'));
const Education = lazy(() => import('./components/sections/Education'));
const Contact = lazy(() => import('./components/sections/Contact'));

function SectionFallback() {
  return <div className="section-loading" aria-hidden="true" />;
}

export default function App() {
  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Education />
          <Contact />
        </Suspense>
      </motion.main>
      <Footer />
    </>
  );
}
