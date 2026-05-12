'use client';

import { useState } from 'react';
import Preloader from '@/components/Preloader';
import ExperienceSelector from '@/components/ExperienceSelector';
import ProfessionalView from '@/components/professional/ProfessionalView';
import TerminalView from '@/components/terminal/TerminalView';

type Mode = 'loading' | 'select' | 'professional' | 'terminal';

export default function Home() {
  const [mode, setMode] = useState<Mode>('loading');

  return (
    <>
      {mode === 'loading' && (
        <Preloader onComplete={() => setMode('select')} />
      )}
      {mode === 'select' && (
        <ExperienceSelector onSelect={(m) => setMode(m as Mode)} />
      )}
      {mode === 'professional' && (
        <ProfessionalView onSwitch={() => setMode('select')} />
      )}
      {mode === 'terminal' && (
        <TerminalView onSwitch={() => setMode('select')} />
      )}
    </>
  );
}
