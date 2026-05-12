'use client';

import { useEffect } from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import Skills from './Skills';
import FeaturedProjects from './FeaturedProjects';
import Achievements from './Achievements';
import Education from './Education';
import Contact from './Contact';

interface Props {
  onSwitch: () => void;
}

export default function ProfessionalView({ onSwitch }: Props) {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => { document.documentElement.style.scrollBehavior = ''; };
  }, []);

  return (
    <div style={{ background: 'var(--bg-base)', color: 'var(--ink-1)', minHeight: '100vh' }}>
      <Navbar onSwitch={onSwitch} />
      <main>
        <Hero />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <FeaturedProjects />
        <div className="section-divider" />
        <Achievements />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Contact />
      </main>
    </div>
  );
}
