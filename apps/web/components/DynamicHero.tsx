'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { readAffinitySegment, writeAffinitySegment, type AffinitySegment } from '@/lib/personalization/signals';

const copyBySegment: Record<AffinitySegment, { title: string; subtitle: string }> = {
  minimal: {
    title: 'Minimal statements, precision tailoring, timeless silhouettes.',
    subtitle: 'Your hero curation emphasizes elevated staples and quiet luxury pairings.'
  },
  streetwear: {
    title: 'Street-lux momentum with bold textures and layered silhouettes.',
    subtitle: 'Pink Flamingo Noir and high-contrast accessories are pushed up for your session.'
  },
  editorial: {
    title: 'Editorial-ready curation for moments that demand visual impact.',
    subtitle: 'Dynamic merchandising now prioritizes dramatic pieces and statement palettes.'
  }
};

export function DynamicHero() {
  const [segment, setSegment] = useState<AffinitySegment>('minimal');

  useEffect(() => {
    setSegment(readAffinitySegment());
  }, []);

  const copy = useMemo(() => copyBySegment[segment], [segment]);

  return (
    <section className="hero" aria-live="polite">
      <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
        {copy.title}
      </motion.h1>
      <p>{copy.subtitle}</p>
      <div className="chips" role="tablist" aria-label="Style affinity">
        {(['minimal', 'streetwear', 'editorial'] as const).map((chip) => (
          <button
            key={chip}
            type="button"
            role="tab"
            aria-selected={chip === segment}
            onClick={() => {
              setSegment(chip);
              writeAffinitySegment(chip);
            }}
          >
            {chip}
          </button>
        ))}
      </div>

export function DynamicHero() {
  return (
    <section className="hero" aria-live="polite">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Hyper-personalized styles for your next statement moment.
      </motion.h1>
      <p>
        Layout and featured products adapt to real-time affinity signals from the Dynamic Merchandising Agent.
      </p>
    </section>
  );
}
